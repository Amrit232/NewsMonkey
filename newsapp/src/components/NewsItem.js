import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let {title,description,imageUrl,newsUrl}=this.props;
    return (
      <div>
        <div className="card" style={{width:"18rem"}}>
            <img src={imageUrl?imageUrl:"https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/c998f6fd3c594b6f590bd82cfeff7367.jpg"} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <a href={newsUrl} className="btn btn-primary">Get more info</a>
            </div>
          </div>
      </div>
    )
  }
}

export default NewsItem
