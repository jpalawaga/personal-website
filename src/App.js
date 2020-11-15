import React, {useState} from 'react';
import ReactDom from 'react-dom';

import { Test } from './test'

// Theme context, default to light theme
export const ThemeContext = React.createContext();

const App = () => {
  const [theme, setTheme] = useState('light')
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <button type="button" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>button</button>
        <Test />
      </div>
    </ThemeContext.Provider>
  )
}

ReactDom.render(<App />, document.getElementById("root"));