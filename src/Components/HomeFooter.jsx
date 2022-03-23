import React from 'react'
import NumberFormat from 'react-number-format';

function HomeFooter() {
    return (
        <div style={{ width: '100%' }}>
            <div className='home-footer'>
                <div className='home-footer__cont'>
                    <div className='home-footer__contTitle2'>
                        <div>
                            <p className='home-header__text'>Fixed Expences</p>
                        </div>
                    </div>
                    <div className='home-footer__contFixed'>
                        <div className='home-footer__contFixed2'>
                            <img src="../../netflix.png" alt="logo" srcset="" className='home-footer__contLogo' />
                            <p className='home-footer__contTitle'>Netflix</p>
                        </div>
                        <p className='home-footer__contPrice'>
                            <NumberFormat
                                value={200}
                                displayType={'text'}
                                thousandSeparator={true}
                                prefix={'$'}
                                renderText={(value, props) => <div {...props}>{value}</div>} />
                        </p>
                    </div>
                    <div className='home-footer__contFixed'>
                        <div className='home-footer__contFixed2'>
                            <img src="../../disney.png" alt="logo" srcset="" className='home-footer__contLogo' />
                            <p className='home-footer__contTitle'>Disney +</p>
                        </div>
                        <p className='home-footer__contPrice'>
                            <NumberFormat
                                value={200}
                                displayType={'text'}
                                thousandSeparator={true}
                                prefix={'$'}
                                renderText={(value, props) => <div {...props}>{value}</div>} />
                        </p>
                    </div>
                    <div className='home-footer__contFixed'>
                        <div className='home-footer__contFixed2'>
                            <img src="../../prime.png" alt="logo" srcset="" className='home-footer__contLogo' />
                            <p className='home-footer__contTitle'>Prime Video</p>
                        </div>
                        <p className='home-footer__contPrice'>
                            <NumberFormat
                                value={200}
                                displayType={'text'}
                                thousandSeparator={true}
                                prefix={'$'}
                                renderText={(value, props) => <div {...props}>{value}</div>} />
                        </p>
                    </div>
                </div>
                <div className='home-footer__cont'>2</div>
            </div>
        </div>
    )
}

export default HomeFooter