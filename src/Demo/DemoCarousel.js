import { Carousel } from 'antd'
import React from 'react'
import 'antd/dist/antd.css'

const DemoCarousel = () => {
  const onChange = (a, b, c) => {
    console.log(a, b, c, 'response')
  }
  return (
    <div>
      <h1>My Carousel</h1>
      <Carousel afterChange={onChange}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
      </Carousel>
    </div>
  )
}

export default DemoCarousel
