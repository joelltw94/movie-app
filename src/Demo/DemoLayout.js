import React from 'react'
import 'antd/dist/antd.css'
import './index.css'
import { Layout } from 'antd'

const DemoLayout = () => {
  const { Header, Content, Footer } = Layout
  return (
    <div>
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  )
}

export default DemoLayout
