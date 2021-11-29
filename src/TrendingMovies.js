import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'

// antd
import { Row, Col, Card, Empty } from 'antd'

const TrendingMovies = () => {
  const history = useHistory()
  // States
  const [trendingMovies, setTrendingMovies] = useState([])
  const [baseUrl, setBaseUrl] = useState('')
  const [posterSize, setPosterSize] = useState('')

  const getInitConfig = () => {
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

  const geTrendingMovies = () => {
    // setPopularMovies(true)

    // fetch all trending Movies
    axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`)
      .then((res) => {
        // console.log(res)
        const { data: { results } } = res
        console.log(results, 'results')
        // update array
        setTrendingMovies(results)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    geTrendingMovies()
    getInitConfig()
  }, [])
  return (
    <>
      <div className='jumbotron' style={{ margin: '1rem' }}>
        <h1>Trending Movies</h1>
        {/* <Row>
          <Col span={8} />
          <Col md={8} style={{ textAlign: 'center' }}>
            <Search />
          </Col>
        </Row> */}
      </div>
      {trendingMovies && (
          <Row gutter={[16, 32]}>
            {/* map */}
            {trendingMovies.length ? trendingMovies.map((trending, i) => {
              // const { id, title, poster_path } = movieData
              console.log(trending, 'trending')
              return (
                <Col key={i}>
                  {/* <Link to='/MovieDetails'> */}
                    <Card
                      key={trending.id}
                      size='small'
                      style={{ width: 200, height: '100%', borderRadius: '20px' }}
                      cover={<img src={baseUrl + posterSize + trending.poster_path} alt={i} />}
                      onClick={() => history.push({ pathname: '/trendingDetails', state: { id: trending.id } })}
                      hoverable
                    >
                      <h4 style={{ textAlign: 'left' }}>{trending.title}</h4>
                    </Card>
                  {/* </Link> */}
                </Col>
              )
            })
              : <Empty />}
          </Row>
        )}
    </>
  )
}

export default TrendingMovies