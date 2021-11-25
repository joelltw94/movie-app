import { Space, Button, Upload, Popconfirm } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import React from 'react'
import 'antd/dist/antd.css'

const DemoSpace = () => {
  return (
    <Space>
      Space
      <Button type='primary'>Primary</Button>

      {/* upload button */}
      <Upload>
        <Button>
          {/* upload icon */}
          <UploadOutlined />Click to Upload
        </Button>
      </Upload>

      {/* confirm button */}
      <Popconfirm title='Are you sure delete this task?' okText='Yes' cancelText='No'>
        <Button>Confirm</Button>
      </Popconfirm>
    </Space>
  )
}

export default DemoSpace
