import React, {useState} from 'react';

import { ThemeContext } from './app'

export const Test = () => {
  return (
    <ThemeContext.Consumer>
      {
        theme => {
          console.log(theme)
          return (
            <p>ello</p>
          )
        }
      }
    </ThemeContext.Consumer>
  )
}