import React from 'react';
import { Card } from 'antd'

function PublicCard(props) {
  return (
    props.data.map((item, index) => (
      <Card
        key={index}
        title={item.title}
        type="inner"
      >
        <div
          dangerouslySetInnerHTML={{
            __html: item.content
          }}
        >
        </div>
      </Card>
    )
    )
  )
}

export default PublicCard