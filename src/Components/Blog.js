import React, { Component } from 'react';

class Blog extends Component {
  render() {
    if(this.props.data){
      var posts = this.props.data.posts.map(function(post){
        var thumbnailImage = post.thumbnail ? './images/blog/'+post.thumbnail : null;
        
        return (
          <div key={post.title} className="columns blog-item">
            <div className="item-wrap blog-post">
              <a href={post.url} target="_blank" rel="noopener noreferrer">
                {thumbnailImage && 
                  <div className="blog-thumbnail">
                    <img alt={post.title} src={thumbnailImage} />
                  </div>
                }
                <div className="blog-info">
                  <h3>{post.title}</h3>
                  <p className="post-date">{post.date}</p>
                  <p className="post-excerpt">{post.excerpt}</p>
                  <div className="post-tags">
                    {post.tags && post.tags.map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="link-icon"><i className="fa fa-external-link"></i></div>
              </a>
            </div>
          </div>
        )
      })
    }

    return (
      <section id="blog">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Blog Posts</h1>
            <div id="blog-wrapper" className="bgrid-halves s-bgrid-halves cf">
              {posts}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Blog;
