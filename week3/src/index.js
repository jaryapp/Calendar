import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './style/reset.css'
import { SelectedDateProvider } from './store/selectedDate'

ReactDOM.render(
  <React.StrictMode>
    <SelectedDateProvider>
      <App />
    </SelectedDateProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
