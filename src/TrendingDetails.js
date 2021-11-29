import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Layout, Row, Col, Button } from 'antd'
import { useHistory } from 'react-router'

const TrendingDetails = (props) => {
  // console.log(props, 'props')
  const history = useHistory()
  const { location: { state: { id } } } = props

  // States
  const [baseUrl, setBaseUrl] = useState('')
  const [posterSize, setPosterSize] = useState('')
  const [movieDetails, setMovieDetails] = useState([])

  const { Content, Sider } = Layout

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

  const getTrendingDetails = () => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=c1531b875c30a4f389deb26c9dc8e1f4`)
      .then((res) => {
        const { data } = res
        // update array
        setMovieDetails(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleHistoryGoBack = () => history.goBack()

  const calcRunTime = (time) => {
    const hr = Math.floor(time / 60)
    const min = time % 60
    const runTime = `${hr ? hr + 'hr' : ''} ${min ? min + 'min' : ''}`
    return runTime
  }

  useEffect(() => {
    getInitConfig()
    getTrendingDetails()
  }, [])
  return (
    <Content>
      <Row>
        <Col style={{ marginLeft: '30px' }}>
          <Button
            type='link'
            style={{ color: '#000000', paddingLeft: '0px' }}
            onClick={handleHistoryGoBack}
          >
            &#10094; Back
          </Button>
        </Col>
      </Row>
      {movieDetails && movieDetails.title &&
        <Layout style={{ padding: '20px' }}>
          <Sider style={{ borderRadius: '15px' }}>
            {<img src={baseUrl + posterSize + movieDetails.poster_path} />}
          </Sider>
          <Layout>
            <div style={{ padding: '20px', marginLeft: '30px' }}>
              <h1 style={{ textAlign: 'left' }}>
                {movieDetails.title}
              </h1>
              <Row>
                {movieDetails.release_date} | 
                {movieDetails.genres.map((genres, id) => {
                  return (
                    <Col key={id}>
                      <h4 style={{ marginRight: '10px' }}>{genres.name}</h4>
                    </Col>
                  )
                })} | {calcRunTime(movieDetails.runtime)}
              </Row>
            </div>
            <div>
              <h2 style={{ marginLeft: '50px', textAlign: 'left' }}>Overview</h2>
              <h4 style={{ textAlign: 'left', marginLeft: '50px' }}>
                {movieDetails.overview}
              </h4>
            </div>
            <div style={{ textAlign: 'left', marginLeft: '50px' }}>
              {movieDetails.release_date}
            </div>
          </Layout>
        </Layout>}
    </Content>
  )
}

export default TrendingDetails
