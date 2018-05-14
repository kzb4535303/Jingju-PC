import React, { Component } from 'react';
import './index.css'
import { Link } from 'react-router-dom'
class Index extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {/* title */}
          <div> <Link to="/EasyLive">新房</Link></div>
        <div>二手房</div>
        <div>购房咨询</div>
      </div>
    )
  }
}

export default Index
