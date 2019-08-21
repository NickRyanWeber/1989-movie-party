import React, { Component } from 'react'

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
            Released on: {this.props.releaseDate}
          </p>
          <p className="movie-overview">{this.props.overview}</p>
        </section>
      </section>
    )
  }
}

export default Movie
