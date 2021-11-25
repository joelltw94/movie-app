import React from 'react'
import 'antd/dist/antd.css'
import { Collapse } from 'antd'

const DemoCollapse = () => {
  const { Panel } = Collapse

  const callback = (key) => {
    console.log(key)
  }

  const text = 'Welcome to Singapore'
  return (
    <div>
      <Collapse defaultActiveKey={['1']} onchange={callback}>
        <Panel header='Panel header 1' key='1'>
          <p>{text}</p>
        </Panel>
        <Panel header='Panel header 2' key='2'>
          <p>{text}</p>
        </Panel>
        <Panel header='Panel header 3' key='3' disabled>
          <p>{text}</p>
        </Panel>
      </Collapse>
    </div>
  )
}
export default DemoCollapse
