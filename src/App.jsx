import React from 'react'
import './assets/css/styles.css'
import Header from './components/common/header/Header';
import MoviesContext from './contexts/MoviesProvider'
import SuscribeContext from './contexts/SuscribeProvider';

const App = () => {
  return (
    <MoviesContext>
      <SuscribeContext>
        <Header />
      </SuscribeContext>
    </MoviesContext>
  )
}

export default App

