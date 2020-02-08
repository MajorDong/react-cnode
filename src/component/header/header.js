import React from 'react';
import { Layout, Row, Col, Divider} from 'antd'
import Nav from '../nav/nav'
import './header.scss'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      current: 'index',
     }
  }
  render() { 
    return ( 
      <Layout.Header id="header">
        <Row md={6} xs={24} className="row">
          <Col className="logo"> 
            <h1>CNODE</h1>
          </Col>
          <Col md={18} xs={0} className="nav">
            <Divider type="vertical" className="divider"/>
            <Nav theme="light" mode="horizontal"/>
          </Col>
        </Row>
      </Layout.Header>
    );
  }
}
 
export default Header;