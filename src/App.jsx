import React from 'react'
import Header from './components/common/header/Header';
import MoviesContext from './contexts/MoviesProvider'

const App = () => {
  return (
    <MoviesContext>
      <Header />
    </MoviesContext>
  )
}

export default App

