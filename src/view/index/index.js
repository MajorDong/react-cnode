import React from 'react';
import { Link, } from "react-router-dom"
import { Menu, Row, Col, Pagination } from 'antd'
import IndexList from '../../component/indexList/indexlist'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import fetchList from '../../actions/indexList'
import './index.scss'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this)
    this.state = {
      defaultPage: 1,
      currentPage: 1
    }
  }
  render() {
    return (
      <Row id="index">
        <Col md={5} xs={24}>
          <div className="menuWrap">
            <Menu className="menu" style={{ minWidth: 156 }} mode="vertical-left">
              <Menu.Item>
                <Link to="/index/all&page=1">全部</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/index/good&page=1">精华</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/index/ask&page=1">问答</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/index/share&page=1">分享</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/index/job&page=1">招聘</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/index/dev&page=1">测试</Link>
              </Menu.Item>
            </Menu>
          </div>
        </Col>
        <Col md={19} xs={24}>
          <div className="artList">
            <IndexList data={this.props.list} loading={this.props.isloading} />
            <div className="paginWrap">
              <Pagination
                showQuickJumper
                defaultCurrent={this.state.defaultPage}
                total={200}
                current={this.state.currentPage}
                onChange={this.handleOnChange} />
            </div>
          </div>
        </Col>
      </Row>
    );
  }
  handleOnChange(pageNumber) {
    this.setState(() => ({
      currentPage: pageNumber
    }))
    let tab = this.props.match.params.id
    this.props.history.push(`/index/${tab}&page=${pageNumber}`)
  }
  componentDidMount() {
    let tab = this.props.match.params.id
    this.props.fetchList(tab, this.state.defaultPage)
  }
  componentDidUpdate(prevProps) {
    let tab = this.props.match.params.id
    let page = this.props.match.params.page
    //处理tab切换
    if (tab !== prevProps.match.params.id) {
      this.props.fetchList(tab, this.state.defaultPage)
      this.setState((state) => ({
        currentPage: state.defaultPage
      }))
    }
    //处理page切换
    if (page !== prevProps.match.params.page){
      this.props.fetchList(tab,this.state.currentPage)
    }
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.indexList.data,
    isloading: state.indexList.isloading
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchList }, dispatch)
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);