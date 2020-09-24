import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Row, Col } from 'antd';
import './MainLayout.css'

const { Footer, Content } = Layout;

const MainLayout = ({ children }) => (
  <Layout>
    <Content className="MainLayout-content">
      <Row justify="center">
        <Col xs={24} md={22} xl={18}>
          {children}
        </Col>
      </Row>
    </Content>
    <Footer className="MainLayout-footer">
      <small>
        &copy; {new Date().getFullYear()} DK
      </small>
    </Footer>
  </Layout>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
