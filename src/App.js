import React from 'react';
import ReactDom from 'react-dom';

import './test'

import './styles.css'

const App = () => {
  const test2 = () => {
    const t = document.body;
    t.classList.contains('dark-mode')
    if (t.classList.contains('dark-mode')) {
      t.classList.remove('dark-mode')
    } else {
      t.classList.add('dark-mode')
    }
  }

  return (
    <div onClick={test2}>
      <p>tes2t</p>
      <corwin-test />
    </div>
  )
}

ReactDom.render(<App />, document.getElementById("root"));