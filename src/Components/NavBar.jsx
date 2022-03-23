import React, { useState } from 'react'
import '../index.css'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AddTaskIcon from '@mui/icons-material/AddTask';
import PlaylistRemoveIcon from '@mui/icons-material/PlaylistRemove';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import FlagIcon from '@mui/icons-material/Flag';
import LoginIcon from '@mui/icons-material/Login';

function NavBar() {
    const [open, setOpen] = useState(true);

    const OpenBar = () => {
        if (open) {
            setOpen(false)
        } else {
            setOpen(true)
        }
    }
    return (

        <div className={open ? 'navBar' : 'navBarClose'}>
            <div className='navBar-header'>
                <img src={open ? '../../longLogo.png' : '../../smallLogo.png'} alt='Logo' className={open ? 'navBar-Logo' : 'navBar-LogoClose'} onClick={() => { OpenBar() }} />
            </div>
            <div className='navBar-body'>
                <div className='navBar-body__itemContainer'>
                    <div className={open ? 'navBar-body__item' : 'navBar-body__itemClose'}>
                        <div className={open ? 'navBar-body__itemText' : 'navBar-body__itemTextClose'} >
                            <AddCircleIcon sx={{ fontSize: '22px' }} />
                            <p>Add Income</p>
                        </div>
                    </div>
                    <div className={open ? 'navBar-body__item' : 'navBar-body__itemClose'}>
                        <div className={open ? 'navBar-body__itemText' : 'navBar-body__itemTextClose'}>
                            <AddCircleOutlineIcon sx={{ fontSize: '22px' }} />
                            <p>Add Expense</p>
                        </div>
                    </div>
                    <div className={open ? 'navBar-body__item' : 'navBar-body__itemClose'}>
                        <div className={open ? 'navBar-body__itemText' : 'navBar-body__itemTextClose'}>
                            <AddTaskIcon sx={{ fontSize: '22px' }} />
                            <p>Add Fixed Expense</p>
                        </div>
                    </div>
                </div>
                <div className='navBar-body__itemContainer'>
                    <div className={open ? 'navBar-body__item' : 'navBar-body__itemClose'}>
                        <div className={open ? 'navBar-body__itemText' : 'navBar-body__itemTextClose'}>
                            <PlaylistRemoveIcon sx={{ fontSize: '22px' }} />
                            <p>Expenses List</p>
                        </div>
                    </div>
                    <div className={open ? 'navBar-body__item' : 'navBar-body__itemClose'}>
                        <div className={open ? 'navBar-body__itemText' : 'navBar-body__itemTextClose'}>
                            <PlaylistAddCheckIcon sx={{ fontSize: '22px' }} />
                            <p>Entry List</p>
                        </div>
                    </div>
                </div>
                <div className='navBar-body__itemContainer'>
                    <div className={open ? 'navBar-body__item' : 'navBar-body__itemClose'}>
                        <div className={open ? 'navBar-body__itemText' : 'navBar-body__itemTextClose'}>
                            <FlagIcon sx={{ fontSize: '22px' }} />
                            <p>Goals</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='navBar-footer'>
                <div className='navBar-footer__itemContainer'>
                    <div className={open ? 'navBar-footer__item' : 'navBar-footer__itemClose'}>
                        <div className={open ? 'navBar-footer__itemText' : 'navBar-footer__itemTextClose'}>
                            <LoginIcon fontSize='large' />
                            <p>LogIn</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default NavBar