import React from 'react';
import { Layout, Row, Col, Dropdown, Icon,} from 'antd'
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
        <Row  className="row">
          <Col md={6} xs={24} className="logo"> 
            <h1>CNODE</h1>
          </Col>
          <Col md={18} xs={0} className="nav">
            <Nav theme="light" mode="horizontal"/>
          </Col>
          <Col md={0} xs={24} className="minNav">
            <Dropdown 
              className="dropDown"
              overlay = {<Nav theme="light" mode="vertical"/>}
              trigger = {['click','touchend']}
            >
                <Icon className="icon" type="bars"style={{color: 'white' , fontSize: '23px'}} />
            </Dropdown>
          </Col>
        </Row>
      </Layout.Header>
    );
  }
}
 
export default Header;