import React from 'react'

// antd
import { Tabs } from 'antd'

// Components
import PopularMovies from '../PopularMovies'
import TrendingMovies from '../TrendingMovies'
import SearchMovies from '../SearchMovies'

const { TabPane } = Tabs

const Home = () => {
  return (
    <>
      <div>
        <div className='jumbotron'>
          <h1 style={{ textAlign: 'center' }}>My Movies</h1>
        </div>
        <Tabs type='card' style={{ margin: '-56px 1rem', textAlign: 'center' }}>
          <TabPane tab='Popular Movies' key='1'>
            <PopularMovies />
          </TabPane>
          <TabPane tab='Trending Movies' key='2'>
            <TrendingMovies />
          </TabPane>
          <TabPane tab='Search For Movies' key='3'>
            <SearchMovies />
          </TabPane>
        </Tabs>
      </div>
    </>
  )
}

export default Home
