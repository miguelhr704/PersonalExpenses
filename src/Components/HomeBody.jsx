import { height, padding } from '@mui/system';
import React from 'react'
import NumberFormat from 'react-number-format';

function HomeBody() {
    return (
        <div className='home-body'>
            <div className='home-body__cont'>
                <div className='home-body__contHeader'>
                    <div className='home-body__contTitle'>
                        <img src="../../gasto.png" alt="Gastos" srcset="" />
                        <div>
                            <p className='home-header__text'>Principal Expences</p>
                            <p className='home-header__text2'>Choose a date</p>
                        </div>
                    </div>
                    <input type="date" name="" id="" className='home-body__contDate' />
                </div>
                <div style={{ width: '100%', height: '25rem', overflowY: 'scroll' }}>
                    <table className='home-body__table'>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Description</th>
                                <th>Cant</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>1</th>
                                <th style={{ color: '#0665d1' }}>Food</th>
                                <th><NumberFormat
                                    value={200}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'$'}
                                    renderText={(value, props) => <div {...props}>{value}</div>} /></th>
                                <th>11/01/2022</th>
                            </tr>
                            <tr>
                                <th>2</th>
                                <th style={{ color: '#0665d1' }}>Water</th>
                                <th><NumberFormat
                                    value={100}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'$'}
                                    renderText={(value, props) => <div {...props}>{value}</div>} /></th>
                                <th>11/01/2022</th>
                            </tr>
                            <tr>
                                <th>3</th>
                                <th style={{ color: '#0665d1' }}>HangOut</th>
                                <th><NumberFormat
                                    value={500}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'$'}
                                    renderText={(value, props) => <div {...props}>{value}</div>} /></th>
                                <th>11/01/2022</th>
                            </tr>
                            <tr>
                                <th>4</th>
                                <th style={{ color: '#0665d1' }}>Internet</th>
                                <th><NumberFormat
                                    value={150}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'$'}
                                    renderText={(value, props) => <div {...props}>{value}</div>} /></th>
                                <th>11/01/2022</th>
                            </tr>
                        </tbody>
                        <tr style={{ backgroundColor: '#0665d1', color: 'white', height: '44px' }}>
                            <th colSpan={2}>Total</th>
                            <th colSpan={2} style={{ textAlign: 'left', paddingLeft: '85px' }}><NumberFormat
                                value={950}
                                displayType={'text'}
                                thousandSeparator={true}
                                prefix={'$'}
                                renderText={(value, props) => <div {...props}>{value}</div>} /></th>
                        </tr>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default HomeBody