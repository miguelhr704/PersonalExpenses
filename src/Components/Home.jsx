import React, { useEffect } from 'react'
import LoginIcon from '@mui/icons-material/Login';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';

function Home() {
    useEffect(() => {
        document.title = 'Welcome';
    })
    return (
        <div className='home'>
            <div className='home-header'>
                <img src='../../longLogoWhite.png' alt='Logo' className='home-logo' srcset="" />
                <button className='home-header__loginBtn'><LoginIcon />  Login</button>
            </div>
            <div className='home-body'>
                <div className='home-bodyContent'>
                    <div className='home-bodyContentText'>
                        <h1>Welcome to Personal Expenses</h1>
                        <h1>The online plataform that help you</h1>
                        <h1>To keep your personal finanses in order</h1>
                    </div>
                    <img src="../../grafic.png" alt="finanzas" srcset="" className='home-bodyContentImg' />
                </div>

            </div>
            <div className='home-footer'>
                <div className='home-footerBox1'>
                    <PriceCheckIcon sx={{ fontSize: '48px', color: '#007dff', marginBottom: '28px' }} />
                    <p className='home-footerBox__text'>Check your Expenses</p>
                    <p className='home-footerBox__text2'>Track your expenses montly to have a control of you money</p>
                </div>
                <div className='home-footerBox2'>
                    <CheckBoxIcon sx={{ fontSize: '48px', color: '#007dff', marginBottom: '28px' }} />
                    <p className='home-footerBox__text'>Manage your Incomes</p>
                    <p className='home-footerBox__text2'>Have a knowledge of all you incomes and learn how to spread it out in your live</p>
                </div>
                <div className='home-footerBox1'>
                    <FactCheckIcon sx={{ fontSize: '48px', color: '#007dff', marginBottom: '28px' }} />
                    <p className='home-footerBox__text'>Set Goals</p>
                    <p className='home-footerBox__text2'>Reach that you always wish set savings goals</p>
                </div>
            </div>

        </div>
    )
}

export default Home