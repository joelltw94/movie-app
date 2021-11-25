import React from 'react'

const BookTitle = (props) => {
  return (
    <label>
      Title:
      {/* receives onTitleChange in props,bind to func onChange event on <input /> field */}
      <input onChange={props.onTitleChange} value={props.title} />
    </label>
  )
}

export default BookTitle
