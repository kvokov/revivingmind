import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Alert, Table, Tag, Space
} from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Api from '../../../services/api';
import { modeIcons, statusColors, statusWeights } from '../../../helpers/constants';


const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    sorter: (a, b) => `${a.id}`.localeCompare(b.id)
  },
  {
    title: 'Name',
    dataIndex: 'name',
    render: (value, item) => <Link to={`/details/${item.id}`}>{value}</Link>,
    sorter: (a, b) => `${a.name}`.localeCompare(b.name)
  },
  {
    title: 'Status',
    dataIndex: 'status',
    render: value => <Tag color={statusColors[value]}>{value}</Tag>,
    sorter: (a, b) => statusWeights[a.status] - statusWeights[b.status],
  },
  {
    title: 'Route',
    key: 'route',
    render: (_, item) => (
      <Space>
        <span>{item.origin}</span>
        {modeIcons[item.mode] ? <FontAwesomeIcon icon={modeIcons[item.mode]} /> : <span>item.mode</span>}
        <span>{item.destination}</span>
      </Space>
    ),
  },
  {
    title: 'Total',
    dataIndex: 'total',
    sorter: (a, b) => a.total - b.total,
  },
];

const ShipmentsTable = () => {
  const [data, setData] = useState({ data: [], loading: true, error: false });

  useEffect( () => {
    Api.getShipments()
      .then(res => setData({
        data: res.data,
        loading: false,
        error: false,
      }))
      .catch(err => setData({
        data: {},
        loading: false,
        error: err,
      }));
  }, []);

  return (
    <>
      {!!data.error && <Alert message="Error" description="Failed to load shipments list" />}
      <Table
        loading={data.loading}
        columns={columns}
        dataSource={data.data}
        rowKey={i => i.id}
        pagination={{ defaultPageSize: 20 }}
        scroll={{ x: true }}
      />
    </>
  );
};

export default ShipmentsTable;
