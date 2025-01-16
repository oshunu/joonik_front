import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from '@mui/material/Button';

import LocationList from './components/LocationList';

function App() {
  

  return (
    <>
      <div>
        <LocationList />
      </div>
      
      <Button variant="contained" color="primary">
        Hello World
      </Button>
      
    </>
  )
}

export default App
