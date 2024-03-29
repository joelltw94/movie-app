import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import App from './App';
// import Test from './Test'
// Packages
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Components
import PopularMovies from './PopularMovies'
import Movie from './Movie'
import Home from './Components/Home'
import TrendingDetails from './TrendingDetails'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/popularMovies' component={PopularMovies} />
        <Route exact path='/movie' component={Movie} />
        <Route exact path='/trendingDetails' component={TrendingDetails} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
