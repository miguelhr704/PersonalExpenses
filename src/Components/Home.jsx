import React, { useEffect } from 'react'
import HomeHeader from './HomeHeader';
import HomeBody from './HomeBody';
import HomeFooter from './HomeFooter';

function Home() {
    useEffect(() => {
        document.title = 'Home';
    })
    return (
        <div className='home'>
            <HomeHeader />
            <div className='home-body'>
                <HomeBody />
            </div>
            <div className='home-footer'>
                <HomeFooter />
            </div>
        </div>
    )
}

export default Home