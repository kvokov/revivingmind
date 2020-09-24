import React, { useEffect } from 'react';
import { PageHeader } from 'antd';
import Search from './Search';
import ShipmentsTable from './ShipmentsTable';

const ShipmentsPage = () => {
  useEffect(() => { document.title = 'Shipments'; }, []);

  return (
    <>
      <PageHeader title="Shipments" className="page-header" />
      <Search />
      <ShipmentsTable />
    </>
  );
}

export default ShipmentsPage;
