import React, { Component } from 'react';

class Presentations extends Component {
  render() {
    if(this.props.data){
      var presentations = this.props.data.presentations.map(function(presentation){
        var presentationImage = presentation.image ? './images/presentations/'+presentation.image : null;
        
        return (
          <div key={presentation.title} className="columns portfolio-item">
            <div className="item-wrap presentation-item">
              <a href={presentation.url} target="_blank" rel="noopener noreferrer">
                {presentationImage && 
                  <img alt={presentation.title} src={presentationImage} />
                }
                <div className="presentation-info">
                  <h3>{presentation.title}</h3>
                  <p className="presentation-venue">{presentation.venue}</p>
                  <p className="presentation-date">{presentation.date}</p>
                  <p className="presentation-description">{presentation.description}</p>
                </div>
                <div className="link-icon"><i className="fa fa-external-link"></i></div>
              </a>
            </div>
          </div>
        )
      })
    }

    return (
      <section id="presentations">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Presentations & Talks</h1>
            <div id="presentations-wrapper" className="bgrid-halves s-bgrid-halves cf">
              {presentations}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Presentations;
