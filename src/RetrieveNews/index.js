import React from "react";

const RetrieveNews = ({news}) => {
  return (
    <div className="news">
      {news.map((singleNews, index) => (
        <div className="single-news" key={index}>
          <a href={singleNews.url} target="_blank"><h4 className="news-title">{singleNews.title}</h4></a>
          <p className="published-time">{singleNews.publishedAt.substring(0, 10)} | {singleNews.author}</p>
          <p className="news-description">{singleNews.description}</p>
        </div>
        ))
      }
    </div>
    
  )
}

export default RetrieveNews;