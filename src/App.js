// Libraries
import React from 'react'
import ReactDom from 'react-dom'
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom'

// Components
import { About } from './modules/About/About'
import { Header } from './modules/Header/Header'

// Styles
import './styles/global.css'

// Utils
import { applyThemeLocale } from './utils/theme/themeUtils'

const App = () => {
  applyThemeLocale()
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className='padding-top-80'>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <p>Home</p>
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  )
}

ReactDom.render(<App />, document.getElementById("app"));