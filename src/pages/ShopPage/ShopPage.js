import React from 'react';
import { Outlet } from 'react-router';

class ShopPage extends React.Component {
  render() {
    return <Outlet test='test' />;
  }
}

export default ShopPage;
