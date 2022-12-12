import React from "react"

const SingleBlog = () => {
  return (
    <div className="col-xl-4 col-md-6">
      <article>
        <div className="post-img">
          <img src="/assets/img/blog/blog-1.jpg" alt="" className="img-fluid" />
        </div>

        <p className="post-category">Politics</p>

        <h2 className="title">
          <a href="blog-details.html">
            Dolorum optio tempore voluptas dignissimos
          </a>
        </h2>

        <div className="d-flex align-items-center">
          <img
            src="/assets/img/blog/blog-author.jpg"
            alt=""
            className="img-fluid post-author-img flex-shrink-0"
          />
          <div className="post-meta">
            <p className="post-author-list">Maria Doe</p>
            <p className="post-date">
              <time datetime="2022-01-01">Jan 1, 2022</time>
            </p>
          </div>
        </div>
      </article>
    </div>
  )
}

export default SingleBlog
