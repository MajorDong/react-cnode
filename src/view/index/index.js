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
    let page = this.getPage()
    this.state = {
      //props的计算属性会根据props变化，让分页器的数字跟着路由变化，解决刷新分页器回到1的问题
      //说明在antd中current的优先极大于defaultCurrent
      currentPage: page 
    }
  }
  //计算属性
  getPage(){
    let pageStr = this.props.match.params.page.split('=')[1]
    let page = +pageStr
    return page
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
                defaultCurrent={1}
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
    this.props.fetchList(tab,pageNumber)
  }
  componentDidMount() {
    let tab = this.props.match.params.id
    let pageStr = this.props.match.params.page.split('=')[1]
    let page = +pageStr
    this.props.fetchList(tab, page)
    console.log(this.props)
  }
  componentDidUpdate(prevProps) {
    let tab = this.props.match.params.id
    //处理tab切换
    if (tab !== prevProps.match.params.id) {
      this.props.fetchList(tab, 1)
      this.setState(() => ({
        currentPage: 1
      }))
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