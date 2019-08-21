import React, { Component } from 'react'
import Moment from 'react-moment'

class Movie extends Component {
  render() {
    return (
      <section className="movie">
        <img
          className="poster"
          src={this.props.poster}
          alt={this.props.posterImgAlt}
        />
        <section className="movie-data">
          <h3 className="movie-title">{this.props.title}</h3>
          <p className="movie-release-date">
            Release Date:{' '}
            <Moment format="MMMM DD,YYYY">{this.props.releaseDate}</Moment>
          </p>
          <p className="movie-overview">{this.props.overview}</p>
        </section>
      </section>
    )
  }
}

export default Movie
