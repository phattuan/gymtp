/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import '../styles/expert_trainer_chill.css'

function Expert_Trainer_Chill(props) {
  const { expert_trainer } = props;
  const { img, name_expert_trainer, job } = expert_trainer;
  return (
    <div className='expert_trainers_chill'>
      <img src={img} className='img_expert_trainer'></img>
      <div className='infor_expert_trainer'>
        <h1 className='name_expert_trainer'>{name_expert_trainer}</h1>
        <div className='conact_expert_trainer'>
          <p className='job'>{job}</p>
          <div className='icon_link_contact'>
            <i className="fa-brands fa-facebook icon_contact"></i>
            <i className="fa-solid fa-phone icon_contact"></i>
            <i className="fa-brands fa-twitter icon_contact"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Expert_Trainer_Chill