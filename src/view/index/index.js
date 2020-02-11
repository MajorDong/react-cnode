import React from 'react';
import { Link, } from "react-router-dom"
import { Menu, Row, Col } from 'antd'
import IndexList from './indexlist'
import './index.scss'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <Row id="index">
        <Col md={5} >
          <div className="menuWrap">
            <Menu className="menu" style={{ minWidth: 156}} mode="vertical-left">
              <Menu.Item>
                <Link to="/index/all">全部</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/index/good">精华</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/index/ask">问答</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/index/share">分享</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/index/job">招聘</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/index/dev">测试</Link>
              </Menu.Item>
            </Menu>
          </div>
        </Col>
        <Col md={19} xs={24}>
          <div className="artList">
            <IndexList/>
          </div>
        </Col>
      </Row>
    );
  }
}

export default Index;