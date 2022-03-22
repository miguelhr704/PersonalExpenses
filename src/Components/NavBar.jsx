import React from 'react'
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
    return (

        <div className='navBar'>
            <div className='navBar-header'>
                <img src='../../longLogo.png' alt='Logo' className='navBar-Logo' />
            </div>
            <div className='navBar-body'>
                <div className='navBar-body__itemContainer'>
                    <div className='navBar-body__item'>
                        <div className='navBar-body__itemText'>
                            <AddCircleIcon sx={{ fontSize: '22px' }} />
                            <p>Add Income</p>
                        </div>
                    </div>
                    <div className='navBar-body__item'>
                        <div className='navBar-body__itemText'>
                            <AddCircleOutlineIcon sx={{ fontSize: '22px' }} />
                            <p>Add Expense</p>
                        </div>
                    </div>
                    <div className='navBar-body__item'>
                        <div className='navBar-body__itemText'>
                            <AddTaskIcon sx={{ fontSize: '22px' }} />
                            <p>Add Fixed Expense</p>
                        </div>
                    </div>
                </div>
                <div className='navBar-body__itemContainer'>
                    <div className='navBar-body__item'>
                        <div className='navBar-body__itemText'>
                            <PlaylistRemoveIcon sx={{ fontSize: '22px' }} />
                            <p>Expenses List</p>
                        </div>
                    </div>
                    <div className='navBar-body__item'>
                        <div className='navBar-body__itemText'>
                            <PlaylistAddCheckIcon sx={{ fontSize: '22px' }} />
                            <p>Entry List</p>
                        </div>
                    </div>
                </div>
                <div className='navBar-body__itemContainer'>
                    <div className='navBar-body__item'>
                        <div className='navBar-body__itemText'>
                            <FlagIcon sx={{ fontSize: '22px' }} />
                            <p>Goals</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='navBar-footer'>
                <div className='navBar-footer__itemContainer'>
                    <div className='navBar-footer__item'>
                        <div className='navBar-footer__itemText'>
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