import React from 'react'

const Input = (props) => {
  return (
    <input type={props.inputType} onChange={props.onChange} value={props.value} />
  )
}

export default Input