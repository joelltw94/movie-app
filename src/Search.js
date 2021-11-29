import React, { useState, useEffect } from 'react'
import { Input, Row, Col, Card, Button } from 'antd'
import './index.css'
import './App.css'
import 'antd/dist/antd.css'
import axios from 'axios'

const Search = () => {
  const [searchValue, setSearchValue] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [baseUrl, setBaseUrl] = useState('')
  const [posterSize, setPosterSize] = useState('')

  // TO-DO
  // Write a function to call API to get search results
  const handleSearch = (searchValueInput) => {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=%27%27&page=1&include_adult=false`, {
      params: {
        query: searchValueInput
      }
    })
      .then((res) => {
        // fetch response
        const { data: { results } } = res
        // Assign to setSearchResults - setSearchResults(data)
        setSearchResults(results)
      })
      .catch((err) => {
        console.log(err)
      })
    // .finally(setSearchValue('')) // clear search values)
    setSearchValue('')
  }

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

  // update as user types
  const handleOnChange = (e) => {
    if (e && e.target && e.target.value) {
      setSearchValue(e.target.value)
      // console.log(e, e.target.value)
    } else {
      setSearchValue('') // clear search values
    }
  }

  useEffect(() => {
    getInitConfig()
  }, [])

  // clear search field

  const { Search } = Input

  const { Meta } = Card

  return (
    <>
      <div className='jumbotron' style={{ margin: '1rem'}}>
        <Row>
          <Col md={20}>
            <Search
              placeholder='Search For Popular Movies'
              // set value
              value={searchValue}
              // update func to new value
              onChange={handleOnChange}
              onSearch={handleSearch}
              style={{ width: 300, marginRight: '10px' }}
              enterButton='Search'
            />
            <Button type='default' onClick={() => setSearchResults([])}>Clear</Button>
          </Col>
        </Row>
      </div>
      <br />
      <div>
        {searchResults && (
          <Row gutter={[16, 32]}>
            {searchResults.length ? searchResults.map(({ title, poster_path }, i) => {
              if (poster_path === null) {
                // <img src={Logo} alt='webite logo'/>
                // <Col>
                //   <Image src='Styles.js/logo.svg' />
                // </Col>
              } else {
                return (
                  <Col key={i}>
                    <Card
                      size='large'
                      title={title}
                      style={{ width: 200 }}
                      cover={<img src={baseUrl + posterSize + poster_path} alt={i} />}
                    >
                      <Meta title={title} />
                    </Card>
                  </Col>
                )
              }
            })
              : ''}
          </Row>
        )}
      </div>
    </>
  )
}

 export default Search


