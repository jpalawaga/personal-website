// Libaries
import React from 'react'

// Components
import { Socials } from '../../components/Socials/Socials'

// Resources
import about_image from '../../../images/about_image.jpeg'

// Styles
import './About.css'

export const About = () => {
  return (
    <div className='about-content'>
      <img
        src={about_image}
        alt='Picture of Corwins mug'
        className='about-image'
      />
      {/* <Socials /> */}
      <div className='about-info'>
        <p>Hey, im Corwin. I'm a Full Stack developer, currently on agronmomy tools with React, Node, Django, PostgreSQL, Redis, Celery. I currently lead a team working on Variable Rate technology at Farmers Edge. There will be a post coming in the future where I talk about what I work on, and will replace this sentance with that, but for now you get this hot mess.</p>
        <p>In free time looking at digital rights, humane tech, and working on personal health. I largely view the purpose of technology should be as a utility and should assist and lift people up. I have great concerns we are going to produce an AGI without humanities and diversity of culture in mind, and it will be one of the greatest travesties we could do to ourselves during this period of innovation. I hope im wrong, but there is a lot of work in tech needed to correct this path.</p>
        <p>This website will be full of posts related to work I have done, sandbox projects, thoughts, reviews, and whatever comes to mind. I wouldn't hold your breath for super high editing and production, this is largely a space to show off my work, and a brain dump.</p>
      </div>
    </div>
  )
}