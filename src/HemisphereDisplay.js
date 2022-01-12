import React from 'react';
import './Hemisphere.css'
import northernPic from './images/img-1.jpg';
import southernPic from './images/img-2.jpg';

const hemisphereConfig ={
    Northern:{
        text:'It is Northern Hemisphere',
        picture: northernPic

    },
    Southern:{
        text:'It is Southern Hemisphere',
        picture: southernPic

    }

}

const HemisphereDisplay =({latitude})=>{
 
    const hemisphere =latitude >0 ? 'Northern':'Southern';
    const {text,picture} =hemisphereConfig[hemisphere]

    return(
        <div className={hemisphere}>
            <div className='ui raised text container segment'>
                <div className='image'>
                    <img src={picture} style={{width:'60%'}} alt="pic"/>
                </div>
                <div className='ui teal bottom attached label'>
                    <h1>Hey you are in {latitude} ,{text} </h1>
                </div>
            </div>
        </div>
    )
}

export default HemisphereDisplay;