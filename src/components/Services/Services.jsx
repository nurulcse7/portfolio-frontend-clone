import React from 'react';
import './Services.css'
import { BsCheckLg } from 'react-icons/bs'

const Services = () => {
    return (
        <section id='services'>
            <h3 className='sub-title'>What I Offer</h3>
            <h1>Services</h1>
            <div className='container services_container'>
                <article className="service">
                    <div className="service_head">
                        <h3>UI/UX Design</h3>
                    </div>

                    <ul className='service_list'>
                        <li>
                            <BsCheckLg className='service_list-icon' />
                            <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BsCheckLg className='service_list-icon' />
                            <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BsCheckLg className='service_list-icon' />
                            <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BsCheckLg className='service_list-icon' />
                            <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BsCheckLg className='service_list-icon' />
                            <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BsCheckLg className='service_list-icon' />
                            <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
                        </li>
                        
                    </ul>
                </article>
                {/* End of UI/UX Design area  */}

                <article className="service">
                    <div className="service_head">
                        <h3>Web Development</h3>
                    </div>

                    <ul className='service_list'>
                        <li>
                            <BsCheckLg className='service_list-icon' />
                            <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BsCheckLg className='service_list-icon' />
                            <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BsCheckLg className='service_list-icon' />
                            <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BsCheckLg className='service_list-icon' />
                            <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BsCheckLg className='service_list-icon' />
                            <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BsCheckLg className='service_list-icon' />
                            <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BsCheckLg className='service_list-icon' />
                            <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BsCheckLg className='service_list-icon' />
                            <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
                        </li>
                    </ul>
                </article>
                {/* End of Web development area  */}

                <article className="service">
                    <div className="service_head">
                        <h3>Apps Development</h3>
                    </div>

                    <ul className='service_list'>
                        <li>
                            <BsCheckLg className='service_list-icon' />
                            <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BsCheckLg className='service_list-icon' />
                            <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BsCheckLg className='service_list-icon' />
                            <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BsCheckLg className='service_list-icon' />
                            <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BsCheckLg className='service_list-icon' />
                            <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BsCheckLg className='service_list-icon' />
                            <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
                        </li>
                        <li>
                            <BsCheckLg className='service_list-icon' />
                            <p>Lorem ipsum dolor, sit amet consectetur elit.</p>
                        </li>
                    </ul>
                </article>
                {/* End of Apps Development area  */}



            </div>
        </section>
    );
};

export default Services;