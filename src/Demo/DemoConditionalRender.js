import React from 'react'
import { Col } from 'antd'

const DemoConditionalRendering = () => {
  const brands = ['toyota', 'suzuki', 'honda', 'vios', 'wish']

  return (
    brands.map((brand, i) =>
      <Col key={i}>
        {brand.length}
      </Col>
    )
  )
}
export default DemoConditionalRendering
