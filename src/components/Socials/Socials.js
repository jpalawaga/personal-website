// Libraries
import React from 'react'

// Styles
import './socials.css'

// SVG's
import GitHub from './images/github.svg'
import LinkedIn from './images/linkedin-2166.svg'
import Twitter from './images/twitter-2170.svg'

export const Socials = () => {
  return (
    <div className='socials-content'>
      <a href="https://github.com/CSSmitty" target="_blank">
        <GitHub />
      </a>
      <a href="https://www.linkedin.com/in/corwin-smith-37644682/" target="_blank">
        <LinkedIn />
      </a>
      <a href="https://twitter.com/cssmittys" target="_blank">
          <Twitter />
      </a>
    </div>
  )
}