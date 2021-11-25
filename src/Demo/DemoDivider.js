import React from 'react'
import 'antd/dist/antd.css'
import { Divider } from 'antd'

const DemoDivider = () => {
  return (
    <>
      <p>Hello</p>
      <Divider plain='text' />
      <p>adkjnadnawdjawldnalwd</p>
      <br />

      <Divider orientation='left' plain>
                Left Text
      </Divider>
      <p>dawdnawdnwaoidnawoidnaw</p>

      <Divider orientation='right' plain>
                Right Text
      </Divider>
      <p>dawdnawdnwaoidnawoidnaw</p>
    </>
  )
}

export default DemoDivider
