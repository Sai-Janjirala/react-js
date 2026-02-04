import React from 'react'
import Child2 from './Child2'

export default function Child1(props) {
  return (
    <div>
      <p>child1 component</p>
      <Child2 name={props.name}/>
    </div>
  )
}
