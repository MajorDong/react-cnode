import React from 'react';
import { List, Avatar, Icon } from 'antd'
import { Link } from 'react-router-dom'



class ReplyList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <List
        itemLayout="horizontal"
        dataSource={this.props.data}
        renderItem={item => (
          <List.Item
            key={item.id}
            actions={[(
              <span>
                {item.ups.length}
                <Icon type="like" />
              </span>
            )]}
          >
            <List.Item.Meta
              avatar={<Avatar src={item.author.avatar_url} />}
              title={
                <span>
                  <Link to={`/user/${item.id}`}>{item.author.loginname}</Link>
                  <span>&nbsp;发表于:{item.create_at.split('T')[0]}</span>
                </span>
              }
              description={
                <div
                  dangerouslySetInnerHTML={{
                    __html: item.content
                  }}
                ></div>
              }
            />
          </List.Item>
        )

        }
      >
      </List>
    );
  }
}

export default ReplyList;