import React from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import { Menu } from 'antd'
import Dashboard from './Dashboard'
import { HomeOutlined, UserOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'
import App from './App'
import AddWatchList from './AddWatchList'

const BasicRouting = () => {
  return (
    <>
      <Router>
        <div>
          {/* <Breadcrumb>
            <Breadcrumb.Item href='/'>
              <HomeOutlined />
              <span>Popular Movies</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item href='/movielist'>
              <UserOutlined />
              <span>My Movie List</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item href='/dashboard'>
              <span>Dashboard</span>
            </Breadcrumb.Item>
          </Breadcrumb> */}
          <Menu mode='horizontal'>
            <Menu.Item>
              <Link to='/'>Popular Movies</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to='/movielist'>Movie List</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to='/dashboard'>Dashboard</Link>
            </Menu.Item>
          </Menu>
          {/* <ul>
            <Link to='/'>Popular Movies</Link>
          </ul>
          <ul>
            <Link to='/movielist'>Movie List</Link>
          </ul>
          <ul>
            <Link to='/dashboard'>Dashboard</Link>
          </ul> */}

          <Switch>
            <Route exact path='/'>
              <App />
            </Route>
            <Route path='/movielist'>
              <AddWatchList />
            </Route>
            <Route path='/dashboard'>
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  )
}
export default BasicRouting
