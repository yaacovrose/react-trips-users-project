import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Ruoter from './Router'
import { UserTokenProvider } from './Token.context'



function App() {

  return (
    <div className='app'>
      <UserTokenProvider>
        <Ruoter />
      </UserTokenProvider>
    </div>
  )
}

export default App




