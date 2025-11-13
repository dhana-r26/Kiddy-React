import React from 'react'

const Greeting = (props) => {
    console.log(props)
  return (
    <div>
       Hello! {props.test}
    </div>
  )
}

export default Greeting
