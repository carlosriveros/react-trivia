import React from 'react'
import './headline.css'
const HeadLine = ({primaryText, secondaryText}) => {
  return (
  <header className='headline'>
    <h1>{primaryText}</h1>
    {secondaryText && <h1>{secondaryText}</h1>}
  </header>
  )
}

export default HeadLine