import React from 'react';
import { Card } from 'antd'
import data from './data'



class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    const bookList = data.map((item, index) => (
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
    return (
      <div id="book">
        {bookList}
      </div>
    );
  }
}

export default Book;