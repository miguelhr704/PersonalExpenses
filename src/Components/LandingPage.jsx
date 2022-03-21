import React, { useEffect } from 'react'
import LoginIcon from '@mui/icons-material/Login';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';

function LandingPage() {
    useEffect(() => {
        document.title = 'Welcome';
    })
    return (
        <div className='land'>
            <div className='land-header'>
                <img src='../../longLogoWhite.png' alt='Logo' className='land-logo' srcset="" />
                <button className='land-header__loginBtn'><LoginIcon />  Login</button>
            </div>
            <div className='land-body'>
                <div className='land-bodyContent'>
                    <div className='land-bodyContentText'>
                        <h1>Welcome to Personal Expenses</h1>
                        <h1>The online plataform that help you</h1>
                        <h1>To keep your personal finanses in order</h1>
                    </div>
                    <img src="../../grafic.png" alt="finanzas" srcset="" className='land-bodyContentImg' />
                </div>

            </div>
            <div className='land-footer'>
                <div className='land-footerBox1'>
                    <PriceCheckIcon sx={{ fontSize: '48px', color: '#007dff', marginBottom: '28px' }} />
                    <p className='land-footerBox__text'>Check your Expenses</p>
                    <p className='land-footerBox__text2'>Track your expenses montly to have a control of you money</p>
                </div>
                <div className='land-footerBox2'>
                    <CheckBoxIcon sx={{ fontSize: '48px', color: '#007dff', marginBottom: '28px' }} />
                    <p className='land-footerBox__text'>Manage your Incomes</p>
                    <p className='land-footerBox__text2'>Have a knowledge of all you incomes and learn how to spread it out in your live</p>
                </div>
                <div className='land-footerBox1'>
                    <FactCheckIcon sx={{ fontSize: '48px', color: '#007dff', marginBottom: '28px' }} />
                    <p className='land-footerBox__text'>Set Goals</p>
                    <p className='land-footerBox__text2'>Reach that you always wish set savings goals</p>
                </div>
            </div>

        </div>
    )
}

export default LandingPage