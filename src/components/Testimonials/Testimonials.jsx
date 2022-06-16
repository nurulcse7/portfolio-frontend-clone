import React from 'react';
import './Testimonials.css'
import Avatar1 from '../../assets/avatar1.jpg'
import Avatar2 from '../../assets/avatar2.jpg'
import Avatar3 from '../../assets/avatar3.jpg'
import Avatar4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import {Navigation,  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';


const data = [
    {
        "id": 1,
        "avatar": Avatar1,
        "name": "Happy",
        "review": "Lorem ipsum dolor sit amet consectetur adipisicing elit orem ipsum dolor sit amet consectetur adipisicing"
    },
    {
        "id": 2,
        "avatar": Avatar2,
        "name": "Patrick",
        "review": "Lorem ipsum dolor sit amet consectetur adipisicing elit"
    },
    {
        "id": 3,
        "avatar": Avatar3,
        "name": "John",
        "review": "Lorem ipsum dolor sit amet consectetur adipisicing elit orem ipsum dolor sit amet consectetur adipisicingorem ipsum dolor sit amet consectetur adipisicing"
    },
    {
        "id":4,
        "avatar": Avatar4,
        "name": "Jenifer",
        "review": "Lorem ipsum dolor sit amet consectetur adipisicing elit"
    }
]

const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h3 className='sub-title'>Review From Clients</h3>
            <h1>Testimonials</h1>

            <Swiper className='container testimonials_container'
                modules={[Navigation, Pagination]} spaceBetween={40}
                slidesPerView={1}
                // navigation
                pagination={{ clickable: true }}
                >
                {
                    data.map(({id, avatar, name, review }) => {
                        return (
                            <SwiperSlide key={id} className="testimonial">
                                <div className="client_avatar">
                                    <img src={avatar} alt="Avatar One" />
                                </div>
                                <h3 className='client_name'>{name}</h3>
                                <h4 className="client_review">{review} </h4>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper >
        </section >
    );
};

export default Testimonials;