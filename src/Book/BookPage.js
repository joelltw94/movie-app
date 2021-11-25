import React from 'react'
import BookList from './BookList'

// ThemeContext created once, outside component func
// default - "dark"
const ThemeContext = React.createContext('dark')

const BookPage = () => {
  return (
    // context obj contains provider wrapped to rendered child component inside
    <ThemeContext.Provider value='light'>
      <BookList />
    </ThemeContext.Provider>
  )
}

export default BookPage
