import React from 'react'
import './Stylesheet.css'

function Stylesheets(props) {
    let color = props.primary ? 'primary' : '';
  return (
    <div className={`${color} text-5xl font-bold`}>Stylesheets</div>
  )
}

export default Stylesheets