import React from 'react';
import { Menu, Icon } from 'antd'
import { Link } from 'react-router-dom';
import './nav.scss'

function Nav(props) {
  return (
    <Menu theme={props.theme} mode={props.mode} id="nav">
      <Menu.Item ><Link to="/index/all"><Icon type="home" />首页</Link></Menu.Item>
      <Menu.Item ><Link to="/book"><Icon type="book" />教程</Link></Menu.Item>
      <Menu.Item ><Link to="/about"><Icon type="info" />关于</Link></Menu.Item>
    </Menu>
  )
}

export default Nav