import { useState } from 'react'

import './App.css'
import Button from '@mui/material/Button';

import LocationList from './components/LocationList';

function App() {
  return (
    <>
      <div>
        <LocationList />
      </div>    
    </>
  )
}

export default App
