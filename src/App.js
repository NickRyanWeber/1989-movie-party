import React, { Component } from 'react'
import Movie from './components/Movie.jsx'
import Header from './components/Header.jsx'
import axios from 'axios'
import Moment from 'react-moment'

class App extends Component {
  state = {
    movies: []
  }

  movieAPI = async () => {
    console.log('movie API')
    const resp = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?primary_release_year=1989&sort_by=popularity.desc&api_key=c37cb7be7720e8daf67b780055ccda33`
    )
    this.setState({
      movies: resp.data.results
    })
    console.log(resp.data.results)
  }

  componentDidMount() {
    console.log('component mounted')
    this.movieAPI()
  }

  render() {
    console.log('rendered')
    return (
      <main>
        <Header />
        <section className="movie-list">
          {this.state.movies
            .sort((a, b) => {
              let dateA = new Date(a.release_date)
              let dateB = new Date(b.release_date)
              return dateA - dateB
            })
            .map(movie => {
              return (
                <Movie
                  key={movie.id}
                  title={movie.title}
                  poster={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${
                    movie.poster_path
                  }`}
                  releaseDate={movie.release_date}
                  overview={movie.overview}
                  posterImgAlt={`${movie.title} Movie Poster`}
                />
              )
            })}
        </section>
      </main>
    )
  }
}

export default App
