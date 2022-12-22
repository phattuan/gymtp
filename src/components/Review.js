/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import '../styles/review.css'

function Review() {
    return (
        <div className='review'>
            <div data-aos="fade-up" className='border_panne_review'>
                <img data-aos="fade-up" src='image/panner_review_1.jpg'></img>
            </div>
            <div data-aos="fade-up" className='border_panne_title'>
                <div data-aos="fade-up" className='container_title_1'>
                    <h1 data-aos="fade-up">Lợi ích của tập <span style={{ color: 'red', fontSize: '2rem' }}>GYM</span></h1>
                    <span data-aos="fade-up" className='title'><i className="fa-solid fa-check"></i>Body đẹp và săn chắc</span>
                    <span data-aos="fade-up" className='title'><i className="fa-solid fa-check"></i>Giúp xương chắc khỏe hơn và phòng tránh các bệnh xương khớp.</span>
                    <span data-aos="fade-up" className='title'><i className="fa-solid fa-check"></i>Tăng cường sức mạnh cơ bắp.</span>
                    <span data-aos="fade-up" className='title'><i className="fa-solid fa-check"></i>Giúp tinh thần sảng khoái và giảm stress hiệu quả.</span>
                    <span data-aos="fade-up" className='title'><i className="fa-solid fa-check"></i>Giúp tăng cường sinh lực...</span>
                </div>
                <div data-aos="fade-up" className='container_title_2'>
                    <h1 data-aos="fade-up" style={{ marginLeft: '3rem' }}>Tập <span style={{ color: 'red', fontSize: '2rem' }}>Gym</span> đơn giản chỉ là tập tạ?</h1>
                    <div data-aos="fade-up" className='row'>
                        <span data-aos="fade-up" className='title'><i className="fa-solid fa-circle-check"></i> Kết hợp giữa<br /><span style={{ color: '#adff2f' }}>Boxing</span> và <span style={{ color: '#adff2f' }}>Muay Thái</span>...</span>
                        <span data-aos="fade-up" className='title'><i className="fa-solid fa-circle-check"></i> Tập <span style={{ color: '#adff2f' }}>Bootcamp</span></span>
                    </div>
                    <div data-aos="fade-up" className='row'>
                        <span data-aos="fade-up" className='title'><i className="fa-solid fa-circle-check"></i> <span style={{ color: '#adff2f' }}>Khiêu vũ</span>, nhảy <span style={{ color: '#adff2f' }}>Zumba</span>,<br /><span style={{ color: '#adff2f' }}>BodyJam</span> ,...</span>
                        <span data-aos="fade-up" className='title'><i className="fa-solid fa-circle-check"></i> <span style={{ color: '#adff2f' }}>Cardio</span>, <span style={{ color: '#adff2f' }}>HIIT</span>,…</span>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Review

