import React from 'react'
import 'antd/dist/antd.css'
import { Row, Col, Divider } from 'antd'

const DemoGridGutter = () => {
  const style = { background: '#0092ff', padding: '8px 0' }
  return (
    <>
      <Divider
        orientation='left' style={{ color: '#333', fontWeight: 'normal' }}
      >
            Horizontal
      </Divider>
      <Row gutter={16}>
        <Col className='gutter-row' span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col className='gutter-row' span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col className='gutter-row' span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col className='gutter-row' span={6}>
          <div style={style}>col-6</div>
        </Col>
      </Row>

      {/* Responsive */}
      <Divider
        orientation='left' style={{ color: '#333', fontWeight: 'normal' }}
      >
            Responsive
      </Divider>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className='gutter-row' span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col className='gutter-row' span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col className='gutter-row' span={6}>
          <div style={style}>col-6</div>
        </Col>
        <Col className='gutter-row' span={6}>
          <div style={style}>col-6</div>
        </Col>
      </Row>
    </>
  )
}
export default DemoGridGutter
