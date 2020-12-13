// Libraries
import React, { useState } from 'react'
import {
  NavLink
} from 'react-router-dom'

// Components
import { Socials } from '../../components/Socials/Socials'
import { Toggle } from '../../components/Toggle/Toggle'

// Styles
import './Header.css'

// Utils
import {
  applyThemeLocale,
  getThemeLocale,
  setThemeLocale,
} from '../../utils/theme/themeUtils'

export const Header = () => {
  const [theme, setTheme] = useState(getThemeLocale())

  return (
    <div className='header'>
      <div className='header-socials'>
        <Socials />
      </div>
      <div className='header-content'>
      <NavLink
          className="nav margin-right-30"
          exact
          activeClassName="active"
          to="/"
        >
          Posts
        </NavLink>
        <NavLink
          className="nav margin-right-30"
          exact
          activeClassName="active"
          to="/about"
        >
          About
        </NavLink>
        <Toggle
          onClick={() => {
            setThemeLocale()
            applyThemeLocale()
            setTheme(getThemeLocale())
          }}
          theme={theme}
        />
      </div>
    </div>
  )
}
