import React, { useContext } from 'react'

const Book = (props) => {
  const theme = useContext(props.ThemeContext)
  const styles = {
    dark: { background: 'black', colour: 'white' },
    light: { background: 'light', colour: 'black' }
  }
  return (
    <li style={styles[theme]}>
      <h2>{props.title}</h2>
      <div>{props.author}</div>
    </li>
  )
}

export default Book
