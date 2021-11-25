import React from 'react'
import { Row } from 'antd'
import Book from './Book'

const BookList = () => {
  const list = [
    { title: 'a', author: 'aa' },
    { title: 'b', author: 'bb' }
  ]

  return (
    list.map((book, i) => {
      return (
        <Row key={i}>
          {/* passing data to child - Book.js */}
          <Book title={book.title} author={book.author} />
        </Row>
      )
    })
  )
}

export default BookList
