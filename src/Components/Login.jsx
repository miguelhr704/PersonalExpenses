import React, { useEffect } from 'react'

function Login() {
    useEffect(() => {
        document.title = 'Login';
    })
    return (
        <div className='login'>
            <div className='login-container'>
                <div className='login-container1'>
                    <form action="" className='login-container1__form'>
                        <img src="../../longLogo.png" alt="" srcset="" className='login-container__logo' />
                        <h2>Login</h2>
                        <div className='login-container1__input'>
                            <label htmlFor="name">Name:</label>
                            <input type="text" name='name' placeholder='Name' />
                        </div>
                        <div className='login-container1__input'>
                            <label htmlFor="name">Password:</label>
                            <input type="password" name='name' placeholder='Password' />
                        </div>
                        <button className='login-container1__btn'>Login</button>
                        <div>
                            <a href="/" className='login-container1__link'>Register Now</a>
                        </div>

                    </form>
                </div>
                <div className='login-container2'>
                    <h1>Take the control of your LIFE</h1>
                    <img src="../../grafic.png" alt="finanzas" srcset="" className='login-container2__img' />

                </div>
            </div>
        </div>
    )
}

export default Login