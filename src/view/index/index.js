import React from 'react';
import { Link, } from "react-router-dom"
import { Menu, Row, Col} from 'antd'
import './index.scss'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <Row id="index">
        <Col md={6} className="menu">
        <Menu>
          <Menu.Item>
            <Link to="/index/ask">全部</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/index/good">精华</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/index/ask">问题</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/index/share">分享</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/index/job">招聘</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/index/test">测试</Link>
          </Menu.Item>
        </Menu>
        </Col>
       
      </Row>
    );
  }
}

export default Index;