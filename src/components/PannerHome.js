/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import '../styles/panner_home.css'

function PannerHome() {
    return (
        <>
            <img id='bg_img' src='image/bg_img.png'></img>
            <div className='panner_home'>
                <div className='container_panner'>
                    <img src='image/panner_1.jpg'></img>
                    <h1 id='title'><span style={{color:'red'}}>Thể dục</span> không phải là một điểm đến.<br /> Nó là một cách sống.</h1>
                </div>
            </div>
            
        </>
    )
}

export default PannerHome