import React from 'react'
import 'antd/dist/antd.css'
import { Card } from 'antd'
// import Logo from './logo.svg'

const DemoCard = () => {
  return (
    <div>
      <Card title='Default size card' extra={<a href='#'>More</a>} style={{ width: 300 }}>
        <p>Card</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>

      {/* borderless card grey background */}
      <Card title='Card title' bordered={false} style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </div>
  )
}
export default DemoCard
