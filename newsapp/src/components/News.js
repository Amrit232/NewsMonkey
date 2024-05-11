import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h2>NewsMonkey - top news</h2>
        <div className='row'>
          <div className='col-md-3'>
            <NewsItem title="myTitle" description="This ia a test"/>
          </div>
          <div className='col-md-3'>
            <NewsItem title="myTitle" description="This ia a test"/>
          </div>
          <div className='col-md-3'>
            <NewsItem title="myTitle" description="This ia a test"/>
          </div>
        </div>
      </div>
    )
  }
}

export default News
