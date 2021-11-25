// Packages
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Row, Col, Card, Empty } from 'antd'
import { Link } from 'react-router-dom'

// Components
import Search from './Search'
// import MovieDetails from './MovieDetails'

const PopularMovies = () => {
  const [baseUrl, setBaseUrl] = useState('')
  const [posterSize, setPosterSize] = useState('')
  const [popularData, setPopularData] = useState([])
  const [isPopularMovies, setPopularMovies] = useState(false)

  // const { Header, Sider, Content, Footer } = Layout

  const getInitConfig = () => {
    axios.get('https://api.themoviedb.org/3/configuration?api_key=c1531b875c30a4f389deb26c9dc8e1f4')
      .then((res) => {
        // fetch response
        const { data: { images: { poster_sizes, base_url } } } = res
        setBaseUrl(base_url)
        setPosterSize(poster_sizes[0])
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const getPopular = () => {
    setPopularMovies(true)
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=c1531b875c30a4f389deb26c9dc8e1f4&language=en-US&page=1')
      .then((res) => {
        // console.log(res)
        const { data: { results } } = res
        // update array
        setPopularData(results)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getInitConfig()
    getPopular()
  }, [])

  // const handleSearchInput = (input) => {
  //   console.log(input, 'input')
  //   if (input) {
  //     setSearchInput(input)
  //   } else {
  //     setSearchInput('')
  //   }
  // }
  return (
    <div style={{ margin: '1rem' }}>
      {/* Search */}
      <Search />
      {/* display data */}
      {isPopularMovies && (
        <Row gutter={[16, 16]}>
          {/* {popularData.length ? popularData.map(({ id, title, poster_path, release_date, overview }, i) => { */}
          {popularData.length ? popularData.map((movieData, i) => {
            const { id, title, poster_path } = movieData
            return (
              <Col key={i}>
                <Link to={`/movie/${id}`}>
                  {/* <Link to={{
                    pathname: 'moviedetails',
                    state: {
                      movieDetails: movieData
                    }
                  }}
                  > */}
                  <Card
                    size='small'
                    title={title}
                    style={{ width: 150 }}
                    // onClick={() => movieDetails(id)}
                    cover={<img src={baseUrl + posterSize + poster_path} alt={i} />}
                  />
                </Link>
              </Col>
            )
          })
            : <Empty />}
        </Row>
      )}
    </div>
  )
}

export default PopularMovies
