import React from 'react';
import ReactDom from 'react-dom';

// Components
import { Header } from './modules/Header/Header'

// Styles
import './styles/global.css'

// Utils
import { applyThemeLocale } from './utils/theme/themeUtils'

const App = () => {
  applyThemeLocale()
  return (
    <div>
      <Header />
    </div>
  )
}

ReactDom.render(<App />, document.getElementById("app"));