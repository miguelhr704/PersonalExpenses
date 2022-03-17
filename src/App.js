import React, { useState, useEffect } from 'react'
import NavBar from './Components/NavBar'
import Home from './Components/Home';
import Login from './Components/Login';
import SingUp from './Components/SingUp';

function App() {
    const [login, setLogin] = useState(true);


    if (login) {
        return (
            <div className='container'>
                <div></div>
                <SingUp />
            </div>
        )
    } else {
        return (
            <div class="container2">
                <Home />
            </div>
        )
    }



}

export default App