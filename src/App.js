import React, { useState, useEffect } from 'react'
import NavBar from './Components/NavBar'
import LandingPage from './Components/LandingPage';
import Login from './Components/Login';
import SingUp from './Components/SingUp';
import Home from './Components/Home';

function App() {
    const [login, setLogin] = useState(true);


    if (login) {
        return (
            <div className='container'>

                <NavBar />

                <Home />
                <div></div>
            </div>
        )
    } else {
        return (
            <div class="container2">
                <LandingPage />
            </div>
        )
    }
}

export default App