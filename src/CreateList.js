import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import 'antd/dist/antd.css'
import { Form, Input, Button, Col, Row, Card, Empty } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'

const CreateList = () => {
  // create data control
  const [form] = Form.useForm()
  const [formEditList] = Form.useForm()
  const [formCreateList] = Form.useForm()
  const [movieTitle, setMovieTitle] = useState('')
  const [movieDescription, setMovieDescription] = useState('')
  const [watchList, setWatchList] = useState([])
  const [isEditList, setIsEditList] = useState(false)

  const onReset = () => {
    form.resetFields()
  }

  const getListFromApi = () => {
    axios.get('https://api.themoviedb.org/3/account/{account_id}/lists?api_key=c1531b875c30a4f389deb26c9dc8e1f4&language=en-US&session_id=559676b6168de87caee8d231c324874cddcfde5a&page=1')
      .then((res) => {
        const { data: { results } } = res
        // update array
        setWatchList(results)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getListFromApi()
  }, [])

  // post request
  const createNewList = (e) => {
    e.preventDefault()
    axios.post('https://api.themoviedb.org/3/list?api_key=c1531b875c30a4f389deb26c9dc8e1f4', {
      // request body
      name: movieTitle,
      description: movieDescription
    },
    {
      params: {
        session_id: '559676b6168de87caee8d231c324874cddcfde5a'
      }
    })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  // pass selected id to function
  const handleEditList = (id) => {
    if (id) {
      const listToEdit = watchList.filter((list) => {
        if (list.id === id) {
          return list
        }
      })
      if (listToEdit && listToEdit.length) {
        setIsEditList(true)
        formEditList.setFieldsValue({
          id: listToEdit[0].id,
          name: listToEdit[0].name,
          description: listToEdit[0].description
        })
      }
    }
  }
  const handleCreateListFinish = (values) => {
    console.log(values, 'values')
  }

  const handleEditListFinish = (values) => {
    console.log('handleEditListFinish')
    setIsEditList(false)
    const url = `https://api.themoviedb.org/4/list/${values.id}`
    axios.put(url, {
      name: values.name,
      description: values.description
    },
    {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE1OTI5MDU5MDYsInN1YiI6IjVlYzczOWQ2MTQwYmFkMDAxYjE4ODZmOSIsImp0aSI6IjIxNTE3NTEiLCJhdWQiOiJjMTUzMWI4NzVjMzBhNGYzODlkZWIyNmM5ZGM4ZTFmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCIsImFwaV93cml0ZSJdLCJ2ZXJzaW9uIjoxfQ.oufqpm_PIwtoV9fknvmDn2KD_PSi2MsI_RiRfR3JCr0'
      }
    })
      .then((res) => {
        console.log(res)
        getListFromApi()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const handleDelListFinish = (values) => {
    console.log('handleDelListFinish')
    const url = `https://api.themoviedb.org/4/list/${values}`
    axios.delete(url, {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE1OTMwNjg4NDgsInN1YiI6IjVlYzczOWQ2MTQwYmFkMDAxYjE4ODZmOSIsImp0aSI6IjIxNTkyMTgiLCJhdWQiOiJjMTUzMWI4NzVjMzBhNGYzODlkZWIyNmM5ZGM4ZTFmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCIsImFwaV93cml0ZSJdLCJ2ZXJzaW9uIjoxfQ.BZrCPnsg0VGZVYjyMuYj7ZnCW-rLSRbssDGAnl8Pmsg'
      }
    })
      .then((res) => {
        console.log(res)
        getListFromApi()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>
      <Row justify='center' gutter={[16, 16]}>
        <Col span={24}>
          <Row justify='center'>
            <Col span={10}>
              <h1>Create Movie List</h1>
              <Form form={formCreateList} onFinish={handleCreateListFinish}>
                <Form.Item
                  label='Movie List'
                  name='movieTitle'
                  rules={[{
                    required: true,
                    message: 'Please input movie list'
                  }]}
                >
                  <Input
                    placeholder='Enter Movie List Name'
                  />
                </Form.Item>

                <Form.Item
                  label='Movie Description'
                  name='movieDescription'
                  rules={[{
                    required: true,
                    message: 'Please input movie description'
                  }]}
                >
                  <Input placeholder='Enter Movie List Description' />
                </Form.Item>

                <Form.Item>
                  <Button type='primary' htmlType='submit' onClick={createNewList}>
                    Create List
                  </Button>
                  <Button type='default' onClick={onReset}>
                    Reset
                  </Button>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </Col>

        {isEditList && (
          <Col span={24}>
            <Form form={formEditList} onFinish={handleEditListFinish}>
              <Form.Item
                name='id'
              >
                <Input hidden />
              </Form.Item>
              <Form.Item
                label='Name'
                name='name'
                rules={[{
                  required: true,
                  message: 'Please input movie list'
                }]}
              >
                <Input
                  placeholder='Enter Movie List Name'
                />
              </Form.Item>
              <Form.Item
                label='Description'
                name='description'
                rules={[{
                  required: true,
                  message: 'Please input movie list'
                }]}
              >
                <Input
                  placeholder='Enter Movie List Name'
                />
              </Form.Item>
              <Button type='primary' htmlType='submit'>
                Update List
              </Button>
            </Form>
          </Col>)}

        {/* display created list */}
        {watchList.length ? watchList.map(({ id, name, description, item_count }, i) => {
          return (
            <Col key={i}>
              <Card
                className='icons-list'
                title={name}
                extra={<Button type='link' onClick={() => handleEditList(id)}>Edit</Button>}
                actions={[<DeleteOutlined key='delete' onClick={() => handleDelListFinish(id)} />]}
                description={description}
                style={{ width: 200, backgroundColor: 'yellow' }}
              >
                <p>{item_count} Items</p>
              </Card>
            </Col>
          )
        }) : (
          <Col span={24}>
            <Empty />
          </Col>
        )}
      </Row>
      {/* <AddWatchList /> */}
    </>
  )
}
export default CreateList

// const createNewList = (e) => {
//   e.preventDefault()
// query
// axios({
//   method: 'post',
//   // url: 'https://api.themoviedb.org/3/list?api_key=c1531b875c30a4f389deb26c9dc8e1f4&session_id=b436453e05429dd68217c7b4c222378b8740cbf4',
//   url: 'https://api.themoviedb.org/3/list?api_key=c1531b875c30a4f389deb26c9dc8e1f4',
//   params: {
//     session_id: 'b436453e05429dd68217c7b4c222378b8740cbf4'
//   },
//   data: {
//     // body
//     // name: name,
//     // description: description,
//     // language: language
//     name: '1',
//     description: 'description1'
//   }
// })
//   .then((res) => {
//     console.log(res)
//     // update array
//   })
//   .catch((err) => {
//     console.log(err)
//   })
