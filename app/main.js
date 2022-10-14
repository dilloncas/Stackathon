import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import store from './store'
import Root from './components/root'

import { BrowserRouter as Router } from 'react-router-dom'

const root = createRoot(document.getElementById('main'))

root.render(
  <Provider store={store}>
    <Router>
      <Root />
    </Router>
  </Provider>
)
