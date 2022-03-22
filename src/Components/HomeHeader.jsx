import React from 'react'
import NumberFormat from 'react-number-format';

function HomeHeader() {
    return (
        <div className='home-header'>
            <div className='home-header__side'>
                <img src="../../principal.png" alt="" />
                <div>
                    <p className='home-header__text'>Principal Finances</p>
                    <p className='home-header__text2'>Welcome</p>
                </div>
            </div>
            <div className='home-header__cont'>
                <img className='home-header__contImg' src="../../gasto.png" alt="spends" srcset="" />
                <p className='home-header__contText'>Spends</p>
                <p className='home-header__contNum' style={{ color: '#ff3d3d' }}>
                    <NumberFormat
                        value={1200}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'$'}
                        renderText={(value, props) => <div {...props}>{value}</div>} />
                </p>
            </div>
            <div className='home-header__cont'>
                <img className='home-header__contImg' src="../../guardado.png" alt="save" srcset="" />
                <p className='home-header__contText'>Your savings</p>
                <p className='home-header__contNum' style={{ color: 'rgb(104 183 249)' }}>
                    <NumberFormat
                        value={1200}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'$'}
                        renderText={(value, props) => <div {...props}>{value}</div>} />
                </p>
            </div>
            <div className='home-header__cont'>
                <img className='home-header__contImg' src="../../ingreso.png" alt="income" srcset="" />
                <p className='home-header__contText'>Incomes</p>
                <p className='home-header__contNum' style={{ color: '#05d43f' }}>
                    <NumberFormat
                        value={1200}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'$'}
                        renderText={(value, props) => <div {...props}>{value}</div>} />
                </p>
            </div>
        </div>
    )
}

export default HomeHeader