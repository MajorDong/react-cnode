import React from 'react';
import { Link, } from "react-router-dom"
import { Menu, Row, Col } from 'antd'
import IndexList from '../../component/indexList/indexlist'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import fetchList from '../../actions/indexList'
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
            <IndexList data={this.props.list} loading={this.props.isloading}/>
          </div>
        </Col>
      </Row>
    );
  }
  componentDidUpdate(prevProps){
    let tab =this.props.match.params.id
    if(tab !== prevProps.match.params.id){
      this.props.fetchList(tab)
    }
  }
  componentDidMount(){
    let tab =this.props.match.params.id
    this.props.fetchList(tab)
  }
}

const mapStateToProps = (state) => {
  return { 
    list: state.indexList.data,
    isloading: state.indexList.isloading
  } 
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchList },dispatch)
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);