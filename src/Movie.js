// Packages
import React, { useState, useEffect } from 'react'
import { Layout, Row, Col, Button } from 'antd'
import 'antd/dist/antd.css'
import { useHistory } from 'react-router'
import axios from 'axios'
import { useParams } from 'react-router-dom'

// Styles
import './index.css'
import './App.css'

const MovieDetails = (props) => {
  const history = useHistory()
  // console.log(props, 'id')
  // receive id
  const { location: { state } } = props
  const { id } = state
  // const { id } = useParams()
  const [movieDetails, setMovieDetails] = useState([])
  const [baseUrl, setBaseUrl] = useState('')
  const [posterSize, setPosterSize] = useState('')
  // const { id } = movieDetails.id
  const { Header, Sider, Content, Footer } = Layout
  // const { id } = props

  const getInitConfig = () => {
    axios.get('https://api.themoviedb.org/3/configuration?api_key=c1531b875c30a4f389deb26c9dc8e1f4')
      .then((res) => {
        // fetch response
        const { data: { images: { poster_sizes, base_url } } } = res
        setBaseUrl(base_url)
        setPosterSize(poster_sizes[1])
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const getMovieDetails = () => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=c1531b875c30a4f389deb26c9dc8e1f4`)
      .then((res) => {
        // console.log(res, 'res')
        const { data } = res
        console.log(data, 'data')
        // update array
        setMovieDetails(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  // convert mins into hr and mins
  const calcRunTime = (time) => {
    const hr = Math.floor(time / 60)
    const min = time % 60
    const runTime = `${hr ? hr + 'hr' : ''} ${min ? min + 'min' : ''}`
    return runTime
  }

  const handleHistoryGoBack = () => history.goBack()
  useEffect(() => {
    getMovieDetails()
    getInitConfig()
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

export default MovieDetails
