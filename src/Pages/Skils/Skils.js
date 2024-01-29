import React from 'react';
import {skilsData1,skilsData2 } from '../../Data/Data'
import './skils.scss'

const Skils = () => {
  return (
    <div className='skils' id='skills'>
        <div>
            <h3 className='skils-heading'>Skils</h3>
        </div>
        <div className='skils-container'>
            <div className='skils-div2'>
                {
                    skilsData1.map((user,i)=>{
                        return(
                            <div className='bar-chart' key={i}>
                                <div className='bar-name'>
                                    <h3>{user.title}</h3>
                                    <p>{user.persentage}</p>
                                </div>
                                <div className='bar-container'>
                                    <div className='skils-bar' style={{width: user.persentage}}>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='skils-div2'>
                {
                    skilsData2.map((user,i)=>{
                        return(
                            <div className='bar-chart' key={i}>
                                <div className='bar-name'>
                                    <h3>{user.title}</h3>
                                    <p>{user.persentage}</p>
                                </div>
                                <div className='bar-container'>
                                    <div className='skils-bar' style={{width: user.persentage}}>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Skils