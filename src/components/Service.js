/* eslint-disable no-useless-concat */
/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import '../styles/service.css'
// import { data_service } from '../data/Data_Service'

function Service(props) {
    const { data_service } = props;
    return (
        <div data-aos="fade-up" className='service'>
            <div data-aos="fade-up" className='container_img_service'>
                <img id='img_service' src='image/img-service.png'></img>
            </div>
            {data_service.map((element) => {
                const { id, name_service, data } = element;
                return (
                    <div data-aos="fade-up" key={id} className={'container_service ' + `container_service_${id}`} >
                        < div data-aos="fade-up" className='border_name_service'>
                            <h1 data-aos="fade-up" className='name_service'>{name_service}</h1>
                        </div>
                        <div data-aos="fade-up" className='container_detail_service'>
                            {data.map((content, index) => {
                                return (
                                    <div data-aos="fade-up" key={index} className='container_detail'>
                                        <i data-aos="fade-up" className="fa-solid fa-check"></i>
                                        <span data-aos="fade-up">{content}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            }
            )}

        </div>
    )
}

export default Service