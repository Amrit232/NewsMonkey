import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let {title,description,imageUrl,newsUrl,author,date,source}=this.props;
    return (
      <div>
        <div className="card" style={{width:"20rem"}}>
            <img src={imageUrl?imageUrl:"https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/c998f6fd3c594b6f590bd82cfeff7367.jpg"} className="card-img-top" alt="..."/>
            <div className="card-body">
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{source}</span>
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text"><small className="text-body-secondary">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
              <a rel="noreference" href={newsUrl} className="btn btn-dark">Get more info</a>
            </div>
          </div>
      </div>
    )
  }
}

export default NewsItem
