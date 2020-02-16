import React from 'react';
import { Menu, Icon } from 'antd'
import { Link, withRouter} from 'react-router-dom';
import './nav.scss'

class Nav extends React.Component {
  constructor(props) {
    super(props);
    let now = this.getNow()
    this.state = { 
      now: now
     }
  }
  getNow(){
    let now = this.props.location.pathname.split('/')
    return now[1]
  }
  render() { 
    return ( 
      <Menu
      className="nav"
      theme={this.props.theme}
      mode={this.props.mode}
      id="nav"
      selectedKeys={[this.state.now]}
    >
      <Menu.Item key="index">
        <Link to="/index/all&page=1"><Icon type="home" />首页</Link>
      </Menu.Item>
      <Menu.Item key="book">
        <Link to="/book"><Icon type="book" />教程</Link>
      </Menu.Item>
      <Menu.Item key="about">
        <Link to="/about"><Icon type="info" />关于</Link>
      </Menu.Item>
    </Menu>
     );
  }
  componentDidUpdate(preProps){
    if(this.props.location.pathname !== preProps.location.pathname){
      let tempNow = this.getNow()
      this.setState({
        now: tempNow
      })
    }
  }
}
 

export default withRouter(Nav)