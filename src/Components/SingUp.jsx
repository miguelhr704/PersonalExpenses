import React, { useEffect } from 'react'

function SingUp() {
    useEffect(() => {
        document.title = 'Register';
    })
    return (
        <div className='login'>
            <div className='login-container'>
                <div className='login-container1'>
                    <form action="" className='login-container1__form'>
                        <h2>Sign Up</h2>
                        <div className='login-container1__input'>
                            <label htmlFor="name">Name:</label>
                            <input type="text" name='name' placeholder='Name' />
                        </div>
                        <div className='login-container1__input'>
                            <label htmlFor="name">Email:</label>
                            <input type="text" name='email' placeholder='Name' />
                        </div>
                        <div className='login-container1__input'>
                            <label htmlFor="name">Password:</label>
                            <input type="password" name='password' placeholder='Password' />
                        </div>
                        <div className='login-container1__input'>
                            <label >Avatar:</label>
                            <label htmlFor='avatar' className='login-container1__inputFileLabel'>
                                Add Avatar
                                <input type="file" name='avatar' id='avatar' placeholder='Avatar' className='login-container1__inputFile' />
                            </label>

                        </div>
                        <button className='login-container1__btn'>Sign Up</button>
                        <div>
                            Already have an account  <a href="/" className='login-container1__link'>Sing In</a>
                        </div>

                    </form>
                </div>
                <div className='login-container2'>
                    <h1>Take the control of your LIFE</h1>
                    <img src="../../grafic.png" alt="finanzas" srcset="" className='login-container2__img' />

                </div>
            </div >
        </div >
    )
}

export default SingUp