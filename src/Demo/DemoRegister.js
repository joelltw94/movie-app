import React, { useState } from 'react'
import 'antd/dist/antd.css'
import { Form, Input, Button, Checkbox } from 'antd'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
}
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 }
}

const DemoRegister = () => {
  const onFinish = values => {
    console.log('Success', values)
  }
  const onFinishFailed = values => {
    console.log('Failed', values)
  }
  return (
    <>
      <Form
        // props as obj, pass into JSX - use {...} as a spread
        // passing of props easier
        {...layout}
        name='basic'
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        {/* username */}
        <Form.Item
          label='Username'
          name='username'
          rules={[{ required: true, message: 'Please input your username' }]}
        >
          <Input />
        </Form.Item>

        {/* password */}
        <Form.Item
          label='Password'
          name='password'
          rules={[{ required: true, message: 'Please input your password' }]}
        >
          <Input.Password />
        </Form.Item>

        {/* checkbox */}
        <Form.Item {...tailLayout} name='remember' valuePropName='checked'>
          <Checkbox>Remember Me</Checkbox>
        </Form.Item>

        {/* button */}
        <Form.Item {...tailLayout}>
          <Button type='primary' htmlType='submit'>Submit</Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default DemoRegister
