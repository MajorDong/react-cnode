import React from 'react';
import { Link, } from "react-router-dom"
import { Menu, Row, Col } from 'antd'
import './index.scss'

let tempArr = []
for(let i =0; i < 100; i++){
  tempArr.push(<li>这是第{i}项</li>)
}
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
                <Link to="/index/dev">测试</Link>
              </Menu.Item>
            </Menu>
          </div>
        </Col>
        <Col md={19} >
          <div className="art">
            {tempArr}
          </div>
        </Col>
      </Row>
    );
  }
}

export default Index;