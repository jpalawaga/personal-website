// Libraries
import React from 'react'

// Styles
import './toggle.css'

export const Toggle = (props) => {
  const {
    onClick,
    theme
  } = props
  return (
    <div
      className='switch round'
      onClick={onClick}
    >
      <div className={`slider round ${theme === 'dark' ? 'checked' : ''}`}></div>
    </div>
  )
}