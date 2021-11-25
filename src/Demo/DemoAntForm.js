import React, { useState } from 'react'
import './App.css'
import 'antd/dist/antd.css'
import { Form, Input, Button } from 'antd'

const CreateList = () => {
  // create data control
  const [form] = Form.useForm()
  const initialValues = { movieTitle: '', movieDescription: '' }
  // const [movieTitle, setMovieTitle] = useState('')
  // const [movieDescription, setMovieDescription] = useState('')

  const layout = {
    // labelCol: {
    //   span: 8
    // },
    wrapperCol: {
      span: 8
    }
  }

  const tailLayout = {
    wrapperCol: {
      offset: 3,
      span: 8
    }
  }

  const handleFormOnFinish = (e) => {
    console.log('Success', e)
  }

  const handleFormOnFinishfailed = (e) => {
    console.log('Failed', e)
  }

  const createNewList = (values) => {
    console.log(values, 'my input')
  }

  return (
    <>
      <Form
        {...layout}
        name='basic'
        initialValues={initialValues}
        onFinish={handleFormOnFinish}
        onFinishFailed={handleFormOnFinishfailed}
        labelAlign='left'
        form={form}
      >
        <Form.Item
          label='Movie Title'
          name='movieTitle'
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Movie Description'
          name='movieDescription'
        >
          <Input />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type='primary' htmlType='createlist' onClick={createNewList}>
            Create List
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default CreateList
