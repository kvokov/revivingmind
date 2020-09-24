import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainLayout from '../main-layout/MainLayout'
import { ShipmentsPage, ShipmentDetailsPage, NotFoundPage } from '../pages';
import 'antd/dist/antd.css';

function App() {
  return (
    <MainLayout>
      <Router>
        <Switch>
          <Route path="/" component={ShipmentsPage} exact />
          <Route path="/details/:shipmentId" component={ShipmentDetailsPage} exact />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </MainLayout>
  );
}

export default App;
