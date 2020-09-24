import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { PageHeader } from 'antd';
import ShipmentDetails from './ShipmentDetails';


const ShipmentDetailsPage = ({ match: { params: { shipmentId } } }) => {
  const history = useHistory();

  useEffect(() => { document.title = 'Shipment Details'; }, []);

  return (
    <>
      <PageHeader title={`Shipment #${shipmentId} Details`} className="page-header" onBack={() => history.push('/')} />
      <ShipmentDetails shipmentId={shipmentId} />
    </>
  );
};

ShipmentDetailsPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      shipmentId: PropTypes.string.isRequired,
    }),
  }),
};

export default ShipmentDetailsPage;
