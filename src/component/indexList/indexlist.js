import React from 'react';
import Axios from 'axios'
import { List ,Avatar} from 'antd'
import { Link} from 'react-router-dom'
import TxtTag from '../tags/tags'
import './indexlist.scss'


class IndexList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: []
    }
  }
  render() {
    return (
      <List id="indexList"
        loading={this.state.loading}
        dataSource={this.state.data}
        renderItem={(item) => (<List.Item
          actions={[`回复:${item.reply_count}`,`访问:${item.visit_count}`]}
          key={item.id}
        >
          <List.Item.Meta
            avatar={<Avatar src={item.author.avatar_url} />}
            title={<Link to={`/detail/${item.id}`}><TxtTag data={item}/>{item.title}</Link>}
            description={<p>
              <Link to={`/user/${item.author.loginname}`}>
                {item.author.loginname}
              </Link>
              <span>&nbsp;</span>
              发表于：{item.create_at.split('T')[0]}
            </p>}
          />
        </List.Item>)
        }
      >

      </List>
    );
  }
  getData = () => {
    Axios.get("https://cnodejs.org/api/v1/topics", {
      params: {
        page: 1,
        limit: 20,
      }
    })
      .then(res => {
        this.setState({
          data: res.data.data,
          loading: false
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
  componentDidMount() {
    this.getData()
  }
}


export default IndexList;