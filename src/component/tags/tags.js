import React from 'react';
import {Tag} from 'antd';

const tabs = {
  top:{
    color: 'magenta',
    txt: '置顶'
  },
  good:{
    color: 'geekblue',
    txt: '精华'
  },
  job:{
    color: 'cyan',
    txt: '招聘'
  },
  share:{
    color: 'purple',
    txt: '分享'
  },
  ask:{
    color: 'lime',
    txt: '问答'
  },
}

class TxtTag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    let newTag = tabs[this.getTxt(this.props.data)]
    return ( 
    <Tag color={newTag.color}>{newTag.txt}</Tag>
     );
  }
  getTxt(data){
    if(data.top === true){
      return 'top'
    }else if(data.good === true){
      return 'good'
    }else if(data.tab === 'job'){
      return 'job'
    }else if(data.tab === 'ask'){
      return 'ask'
    }else{
      return 'share'
    }
  }
}
 
export default TxtTag;