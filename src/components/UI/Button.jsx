import React from 'react'

const Button = (props) => {
  return (
    <button style={props.color} onClick={props.onClick}>{props.title}</button>
  )
}

export default Button