import React, { useState } from 'react'
import { Input, Button } from 'antd'
import './index.css'
import './App.css'
import 'antd/dist/antd.css'

const Test = () => {
  // declare new state variable - name
  const [name, setName] = useState('')

  const { Search } = Input

  // input by user
  const handleSearch = (input) => {
    console.log(input, 'this is my input')
    // update state
    setName(input)
  }

  const clear = () => {
    setName('')
  }

  return (
    <div>
      <Search
        onSearch={handleSearch}
        enterButton='Enter'
        style={{ width: 300 }}
      />
      <Button type='primary' onClick={clear} style={{ width: 300 }}>Clear</Button>
      <h3>{name}</h3>
    </div>
  )
}

export default Test
