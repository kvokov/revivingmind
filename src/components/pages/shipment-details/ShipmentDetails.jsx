import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Alert, Descriptions, Skeleton } from 'antd';
import Api from '../../../services/api';
import './ShipmentDetails.css';

const { Item: DescriptionsItem } = Descriptions;

const ShipmentDetails = ({ shipmentId }) => {
  const [{ data, loading, error }, setData] = useState({ data: null, loading: true, error: false });

  useEffect( () => {
    Api.getShipmentById(shipmentId)
      .then(res => setData({
        data: res.data,
        loading: false,
        error: false,
      }))
      .catch(err => setData({
        data: null,
        loading: false,
        error: err,
      }));
  }, [shipmentId]);

  return (
    <div className="ShipmentDetails">
      {(!error && !loading && data) && (
        <Descriptions bordered>
          <DescriptionsItem label="ID:">{data.id}</DescriptionsItem>
          <DescriptionsItem label="Name:">{data.name}</DescriptionsItem>
          <DescriptionsItem label="Status:">{data.status}</DescriptionsItem>
          <DescriptionsItem label="Total:">{data.total}</DescriptionsItem>
          <DescriptionsItem label="Type:">{data.type}</DescriptionsItem>
          <DescriptionsItem label="User ID:">{data.userId}</DescriptionsItem>
          <DescriptionsItem label="Mode:">{data.mode}</DescriptionsItem>
          <DescriptionsItem label="Origin:">{data.origin}</DescriptionsItem>
          <DescriptionsItem label="Destination:">{data.destination}</DescriptionsItem>
          <DescriptionsItem label="Cargo:" span={2}>
              {data.cargo.map((cargo, i) => (
                <p key={i}>{i + 1}) Type: {cargo.type}, Description: {cargo.description}, Volume: {cargo.volume}</p>
              ))}
          </DescriptionsItem>
          <DescriptionsItem label="Services:">
              {data.services.map(service => <p key={service.type}>{service.type}</p>)}
          </DescriptionsItem>
        </Descriptions>
      )}
      {loading && <Skeleton active />}
      {!!error && <Alert message="Error" description="Failed to load shipment details" />}
    </div>
  );
};

ShipmentDetails.propTypes = {
  shipmentId: PropTypes.string.isRequired,
};

export default ShipmentDetails;
