/* eslint-disable no-undef */
import React, { useState } from 'react'
import '../styles/nav_left.css'


function NavLeft() {
  const [shownav, setShownav] = useState('container_nav')
  const [buttshow, setButtshow] = useState({
    'display': 'flex'
  })

  const hidden = () => {
    if (shownav === 'container_nav' && buttshow.display === 'flex') {
      setShownav('container_nav active');
      setButtshow({
        'display': 'none'
      })
    };
    setTimeout(() => {
      setShownav('container_nav');
      setButtshow({
        'display': 'flex'
      })
    }, 10000);
  }


  return (
    <>
      <div className={shownav}>
        <div className='nav_left' >
          <li><a href='#supplement'>supplement</a></li>
          <li><a href='#whey protein'>whey protein</a></li>
          <li><a href='#contact'>contact</a></li>
          <li><a href='#book'>book</a></li>
        </div>
      </div>
      <i id='butt_show_nav' style={buttshow} onClick={hidden} className="fa-solid fa-caret-right"></i>
    </>
  )
}

export default NavLeft