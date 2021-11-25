import React, { useState } from 'react'
import './App.css'
import 'antd/dist/antd.css'
import { Modal, Button, Card } from 'antd'
import Form from 'antd/lib/form/Form'
// import { AddWatchList } from './AddWatchList'

export const DemoModal = () => {
  const [visible, setVisible] = useState(false)
  const showModal = () => {
    setVisible(true)
  }
  const handleOk = () => {
    setVisible(false)
  }
  const handleCancel = () => {
    setVisible(false)
  }
  return (
    <>
      <Form>
        <Card
          title='Movie'
          style={{ width: 200 }}
        >
          <p>Description</p>
          <Modal
            title='Edit Content'
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <p>C</p>
          </Modal>
          <Button type='primary' onClick={showModal}>Edit</Button>
        </Card>
      </Form>

    </>
  )
}
