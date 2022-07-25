import React, { useState } from 'react'
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { Routes } from './components/Routes';

const App = () => {

    const [darkTheme, setDarkTheme] = useState(false)

    // const toggleButton = () => darkTheme ? setDarkTheme(false) : setDarkTheme(true)


  return (
    <div className={ darkTheme ? 'dark' : ''}>
        <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-50 min-h-screen">
            <NavBar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
            <Routes />
            <Footer />
            {/* <button className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
             onClick={toggleButton}>Toggle</button> */}
        </div>      
    </div>
  )
}


export default App;