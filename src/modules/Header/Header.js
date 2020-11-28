// Libraries
import React, { useState } from 'react'

// Components
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
    <div>
      <Toggle
        onClick={() => {
          setThemeLocale()
          applyThemeLocale()
          setTheme(getThemeLocale())
        }}
        theme={theme}
      />
    </div>
  )
}
