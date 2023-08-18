import React from 'react'

const NewsItem = (props) => {


  let { title, description, imageUrl, NewsUrl, date, author, source } = props;
  return (

    <div>
      <div className="card my-4">
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title} ...</h5>
          <p className="card-text">{description} ...</p>
          <a href={NewsUrl} target="_blank" className="btn btn-sm btn-primary">Read more <span className="badge text-bg-light">{source}</span> </a>
          <p className="card-text"><small className="text-muted"> By {author} on {new Date(date).toGMTString()}</small></p>
        </div>
      </div>
    </div>
  )

}
export default NewsItem;

