import React from "react"
import Child from "./Child"

const parent = (props) => {
  return (
    <div>
      <Child doWhatever={props.changeTheWorldEvent} title={props.title} />
      <Child doWhatever={props.keepTheWorldSameEvent} title={props.title} />
    </div>
  )
}

export default parent
