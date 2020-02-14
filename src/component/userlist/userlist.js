import React from 'react';
import { List, Avatar } from 'antd'
import { Link } from 'react-router-dom'

const UserList = (props) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={props.data}
      renderItem={(item) => {
        let { id, author, title, last_reply_at } = item
        return (<List.Item
          key={id}
          actions={[`最后回复时间${last_reply_at.split('T')[0]}`]}
        >
          <List.Item.Meta 
            avatar={<Avatar src={author.avatar_url} />}
            title={
            <div>
              {author.loginname}
              <h4><Link to={`/detail/${id}`}>{title}</Link></h4>
            </div>
            }
          />
          
        </List.Item>)
      }}


    >
    </List>
  );
}

export default UserList;