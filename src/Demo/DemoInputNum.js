import React from 'react'
import 'antd/dist/antd.css'
import './index.css'
import { InputNumber } from 'antd'

const DemoInputNum = () => {
  const onChange = (value) => {
    console.log('changed', value)
  }
  return (
    <div>
      <InputNumber min={0} max={10} step={1} onChange={onChange} />
    </div>
  )
}

export default DemoInputNum
