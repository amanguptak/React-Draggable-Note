

import './App.css'


import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
function App() {



  return (
    <>
     <div className="min-h-screen flex flex-col m-3">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
    
    </div>


    </>
  )
}

export default App
