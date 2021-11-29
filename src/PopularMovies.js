// Packages
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Row, Col, Card, Empty, Input } from 'antd'
import { useHistory } from 'react-router-dom'

// Components
import Search from './Search'
// import MovieDetails from './MovieDetails'

const PopularMovies = () => {
  const history = useHistory()
  const [baseUrl, setBaseUrl] = useState('')
  const [posterSize, setPosterSize] = useState('')
  const [popularData, setPopularData] = useState([])
  const [isPopularMovies, setPopularMovies] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const getInitConfig = () => {
    // console.log(process.env.REACT_APP_API_KEY, 'api key')
    axios.get(`https://api.themoviedb.org/3/configuration?api_key=${process.env.REACT_APP_API_KEY}`)
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
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
      .then((res) => {
        // console.log(res)
        const { data: { results } } = res
        // console.log(results, 'results')
        // update array
        setPopularData(results)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const handleOnChange = e => {
    console.log(e.target.value)
    
  }

  useEffect(() => {
    getInitConfig()
    getPopular()
  }, [])

  // const handleSearchInput = e => {
  //   console.log(e.target.value, 'Input')
  //   const value = e.target.value
  //   if (value) {
  //     setSearchInput(value)
  //   } else {
  //     setSearchInput('')
  //   }
  // }
  return (
    <>
      <div className='jumbotron' style={{ margin: '1rem' }}>
        <h1>Popular Movies</h1>
        {/* <Row>
          <Col span={8} />
          <Col md={8} style={{ textAlign: 'center' }}>
            <Search />
          </Col>
        </Row> */}
      </div>
      <div>
        {isPopularMovies && (
          <Row gutter={[16, 32]}>
            {/* map */}
            {popularData.length ? popularData.map((movieData, i) => {
              const { id, title, poster_path } = movieData
              return (
                <Col key={i}>
                  {/* <Link to='/MovieDetails'> */}
                    <Card
                      key={i}
                      size='small'
                      style={{ width: 200, height: '100%', borderRadius: '20px' }}
                      cover={<img src={baseUrl + posterSize + poster_path} alt={i} />}
                      onClick={() => history.push({ pathname: '/movie', state: { id: id } })}
                      hoverable
                    >
                      <h4 style={{ textAlign: 'left' }}>{title}</h4>
                    </Card>
                  {/* </Link> */}
                </Col>
              )
            })
              : <Empty />}
          </Row>
        )}
      </div>
    </>
  )
}

export default PopularMovies
