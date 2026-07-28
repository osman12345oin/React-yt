import React from 'react'
import card from './components/card'
import Navber from './components/Navber'

const App = () => {
  return (
    <div>
        {Navber()}
        {card()}
        {card()}
        {card()}
    </div>
  )
}

export default App
