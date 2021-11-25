import React from 'react'
import { Col } from 'antd'

const DemoMap = () => {
  const numbers = [2, 4, 6, 8]
  // array.map takes 2 arg; 1- item, 2-index
  return (
    numbers.map((num, i) => {
      return (
        <Col key={i}>
          <h4>This is a mapping example</h4>
          {num * 2}
        </Col>
      )
    })
  )
}

export default DemoMap
