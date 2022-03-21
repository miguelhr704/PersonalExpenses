import React, { useEffect } from 'react'
import HomeHeader from './HomeHeader';

function Home() {
    useEffect(() => {
        document.title = 'Home';
    })
    return (
        <div className='home'>
            <HomeHeader />
            <div className='home-body'>

            </div>
            <div className='home-footer'>

            </div>
        </div>
    )
}

export default Home