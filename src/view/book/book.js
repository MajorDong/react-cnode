import React from 'react';
import PublicCard from '../../component/publicCard/publicCard'
import data from './data'



class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    }
  }
  render() {
    return (
      <div id="book">
        <PublicCard data={this.state.data}/>
      </div>
    );
  }
}

export default Book;