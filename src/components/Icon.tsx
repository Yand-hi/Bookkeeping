import React from 'react'

type Icon = {
  name: String
}
const Icon = (props: Icon) => {
  return (
    <svg className="icon">
      <use xlinkHref={'#' + props.name}/>
    </svg>
  )
}
export default Icon