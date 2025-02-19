import React, { Component } from 'react';

class Videos extends Component {
  render() {
    if(this.props.data){
      var videos = this.props.data.videos.map(function(video){
        return (
          <div key={video.title} className="columns portfolio-item">
            <div className="item-wrap">
              <div className="video-container">
                <iframe
                  title={video.title}
                  width="100%"
                  height="315"
                  src={video.url}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="video-info">
                <h3>{video.title}</h3>
                <p>{video.description}</p>
              </div>
            </div>
          </div>
        )
      })
    }

    return (
      <section id="videos">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Videos</h1>
            <div id="video-wrapper" className="bgrid-halves s-bgrid-halves cf">
              {videos}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Videos;
