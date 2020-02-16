import React from 'react';
import { Card, Avatar } from 'antd';
import { Link } from 'react-router-dom'
import TxtTag from '../../component/tags/tags'
import ReplyList from '../../component/replylist/replylist'
import './detail.scss'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import fetchDetail from '../../actions/detail'

class Detail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  render() {
    let data = this.props.data
    let { author } = data
    const artTitle = (
      <div> 
        <h2>{data.title}</h2>
        <div style={{display: 'flex', alignItems:'center'}}>
          <TxtTag data={data} />
          <Avatar scr={author && author.avatar_url} />
          <Link to={`/user/${author && author.loginname}`}>{author && author.loginname}</Link>
          <span>发表于:{data.create_at && data.create_at.split("T")[0]}</span>
        </div>
      </div>
    )
    return (
      <div className="detailWrap">
        <Card
          loading={this.state.loading}
          title={artTitle}
          type="inner"
        >
          <div className="art"
            dangerouslySetInnerHTML={
              {
                __html: data.content
              }
            }
          ></div>
        </Card>
        <Card
          type="inner"
          title={`共有${data.replies && data.replies.length}条回复`}
        >
          <ReplyList data={data.replies && data.replies}/>
        </Card>
      </div>
    );
  }

  componentDidMount() {
    let tempId = this.props.match.params.id
    this.props.fetchDetail(tempId)
  }
}

const mapStateToProps = (state) =>{
  return {
    data: state.detail.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchDetail },dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail);