import React, { useState } from 'react'

const DemoForm = () => {
  // initial value - empty string
  const [name, setName] = useState('')

  // event handler to capture changes
  // current value text saved to state using setName
  const handleChange = (e) => {
    // setName causes component to rerender,
    // text display in input field from
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    // updated user input
    setName(name)
    console.log(name, 'this is my name')
    // prevents page from being refreshed on form submission
    e.preventDefault()
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          {/* value prop allows a value, there must be onChange prop */}
          <input type='text' value={name} onChange={handleChange} />
          <input type='submit' name='Submit' />
        </label>
        <p>{}</p>
      </form>
    </>
  )
}

export default DemoForm
