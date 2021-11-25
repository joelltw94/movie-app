// Packages
import React, { useState, useEffect } from 'react'
import { Layout } from 'antd'
import 'antd/dist/antd.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'

// Styles
import './index.css'
import './App.css'
// Components
// import PopularMovies from './PopularMovies'

const MovieDetails = () => {
  // receive id
  // const { location: { state: { movieDetails } } } = props
  // console.log(movieDetails, 'movieDetails')
  const { id } = useParams()
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
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=c1531b875c30a4f389deb26c9dc8e1f4&language=en-US`)
      .then((res) => {
        console.log(res)
        const { data } = res
        // update array
        setMovieDetails(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  useEffect(() => {
    getMovieDetails()
    getInitConfig()
  }, [])

  return (
    <>
      {movieDetails && movieDetails.title &&
        <Layout>
          <Sider>{<img src={baseUrl + posterSize + movieDetails.poster_path} />}</Sider>
          <Layout>
            <Header style={{ backgroundColor: '#fafafa' }}>{movieDetails.title}</Header>
            <Content>{movieDetails.overview}</Content>
            <Footer>{movieDetails.release_date}</Footer>
          </Layout>
        </Layout>}

      {/* <Descriptions title='Movie Details'>
        <Descriptions.Item label='Movie Title'>{movieDetails.original_title}</Descriptions.Item>
      </Descriptions>
      <Descriptions>
        <Descriptions.Item label='Overview'>{movieDetails.overview}</Descriptions.Item>
      </Descriptions>
      <Descriptions>
        <Descriptions.Item label='Release Date'>{movieDetails.release_date}</Descriptions.Item>
      </Descriptions> */}
    </>
  )
}

export default MovieDetails
