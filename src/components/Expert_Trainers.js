/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import '../styles/expert_trainers.css'
import Expert_Trainer_Chill from './Expert_Trainer_Chill'
import AOS from 'aos';


function Expert_Trainers(props) {
    const {data_expert_trainer} = props;

    return (
        <div className='expert_trainers' >
            <div data-aos="fade-up" className='border_title_expert_trainers'>
                <h1 data-aos="fade-up" id='title_expert_trainers'>expert trainers</h1> 
            </div>
            <div data-aos="fade-up" className='container_expert_trainers'>
            {data_expert_trainer.map((expert_trainer) =>{
                const {id} = expert_trainer;
                return <Expert_Trainer_Chill key={id} expert_trainer={expert_trainer}/>
            })}
            </div>
        </div>
    )
}

export default Expert_Trainers