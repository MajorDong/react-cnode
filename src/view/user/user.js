import React from 'react';
import { Avatar, Row, Col, Card} from 'antd'
import UserList from '../../component/userlist/userlist'
import './user.scss'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import fetchUser from '../../actions/user'


const dataStyle = {
  color: '#448ef7'
}
class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      listLoading: true
     }
  }
  render() { 
    let {loginname, avatar_url, score, create_at} = this.props.userData
    return ( 
      <div className="userWrap">
        <div className="userInfo">
          <Avatar className="userAvatar" src={avatar_url}/>
          <Row style={{fontSize:'16px', textAlign:'center'}}>
            <Col md={8}>用户名:<span style={dataStyle}>{loginname}</span></Col>
            <Col md={8}>积分:<span style={dataStyle}>{score}</span></Col>
            <Col md={8}>注册时间:<span style={dataStyle}>{create_at.split('T')[0]}</span></Col>
          </Row>
        </div>
        <Card
          type="inner"
          title="最近创建话题"
        >
          <UserList data={this.props.userData.recent_topics}/>
        </Card>
        <Card
          type="inner"
          title="最近回复的话题"
        >
          <UserList data={this.props.userData.recent_replies}/>
        </Card>
      </div>
     );
  }
  componentDidMount(){
    let name = this.props.match.params.loginname
    this.props.fetchUser(name)
  }
}
const mapStateToProps = (state) =>{
  return{
    userData:state.user.data
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchUser},dispatch)
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);