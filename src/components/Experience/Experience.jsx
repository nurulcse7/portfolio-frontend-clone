import React from 'react';
import './Experience.css'
import { BsShieldFillCheck } from 'react-icons/bs'
import { ImHtmlFive } from 'react-icons/im'
import { SiCss3 } from 'react-icons/si'
import { SiJavascript } from 'react-icons/si'
import { SiBootstrap } from 'react-icons/si'
import { SiTailwindcss } from 'react-icons/si'
import { SiReact } from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandNextjs } from 'react-icons/tb'
import { GiDaisy } from 'react-icons/gi'
import { SiTypescript } from 'react-icons/si'
import { TbBrandReactNative } from 'react-icons/tb'
import { FaNodeJs } from 'react-icons/fa'
import { SiExpress } from 'react-icons/si'
import { SiMongodb } from 'react-icons/si'
import { SiJsonwebtokens } from 'react-icons/si'
import { SiNodemon } from 'react-icons/si'
import { RiMailSendFill } from 'react-icons/ri'
import { MdAlternateEmail } from 'react-icons/md'
import { SiSymphony } from 'react-icons/si'
import { SiRedux } from 'react-icons/si'
import { TbApi } from 'react-icons/tb'
import { SiPython } from 'react-icons/si'
import { SiDjango } from 'react-icons/si'
import { GrMysql } from 'react-icons/gr'



const Experience = () => {
    return (
        <section id='experience'>
            <h3 className='sub-title'>What Skills do I have</h3>
            <h1>My Experience</h1>

            <div className="container experience_container">
                <div className="experience_frontend">
                    <h2>Frontend Development</h2>
                    <div className="experience_content">

                        <article className='experience_details'>
                            <ImHtmlFive className='experience_details-icon' />
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Experience</small>
                            </div>
                        </article>

                        <article className='experience_details'>
                            <SiCss3 className='experience_details-icon' />
                            <div>
                                <h4>CSS</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>

                        <article className='experience_details'>
                            <SiJavascript className='experience_details-icon' />
                            <div>
                                <h4>JavaScript</h4>
                                <small className='text-light'>Experience</small>
                            </div>
                        </article>

                        <article className='experience_details'>
                            <SiBootstrap className='experience_details-icon' />
                            <div>
                                <h4>Bootstrap</h4>
                                <small className='text-light'>Experience</small>
                            </div>
                        </article>

                        <article className='experience_details'>
                            <SiTailwindcss className='experience_details-icon' />
                            <div>
                                <h4>Tailwind</h4>
                                <small className='text-light'>Experience</small>
                            </div>
                        </article>

                        <article className='experience_details'>
                            <SiReact className='experience_details-icon' />
                            <div>
                                <h4>React</h4>
                                <small className='text-light'>Experience</small>
                            </div>
                        </article>

                        <article className='experience_details'>
                            <FaReact className='experience_details-icon' />
                            <div>
                                <h4>ReactBootstrap</h4>
                                <small className='text-light'>Experience</small>
                            </div>
                        </article>

                        <article className='experience_details'>
                            <RiReactjsLine className='experience_details-icon' />
                            <div>
                                <h4>React Query</h4>
                                <small className='text-light'>Experience</small>
                            </div>
                        </article>

                        <article className='experience_details'>
                            <TbBrandNextjs className='experience_details-icon' />
                            <div>
                                <h4>Next JS</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>

                        <article className='experience_details'>
                            <GiDaisy className='experience_details-icon' />
                            <div>
                                <h4>daisyUI</h4>
                                <small className='text-light'>Experience</small>
                            </div>
                        </article>

                        <article className='experience_details'>
                            <SiTypescript className='experience_details-icon' />
                            <div>
                                <h4>TypeScript</h4>
                                <small className='text-light'>Experience</small>
                            </div>
                        </article>

                        <article className='experience_details'>
                            <TbBrandReactNative className='experience_details-icon' />
                            <div>
                                <h4>ReactNative</h4>
                                <small className='text-light'>Experience</small>
                            </div>
                        </article>
                    </div>
                </div>
                {/* End of Frontend  */}
                <div className="experience_backend">
                    <h2>Backend Development</h2>
                    <div className="experience_content">

                        <article className='experience_details'>
                            <FaNodeJs className='experience_details-icon' />
                            <div>
                                <h4>Node JS</h4>
                                <small className='text-light'>Experience</small>
                            </div>
                        </article>

                        <article className='experience_details'>
                            <SiExpress className='experience_details-icon' />
                            <div>
                                <h4>Express JS</h4>
                                <small className='text-light'>Experience</small>
                            </div>
                        </article>

                        <article className='experience_details'>
                            <SiMongodb className='experience_details-icon' />
                            <div>
                                <h4>MongoDB</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>

                        <article className='experience_details'>
                            <SiJsonwebtokens className='experience_details-icon' />
                            <div>
                                <h4>JWT</h4>
                                <small className='text-light'>Experience</small>
                            </div>
                        </article>

                        <article className='experience_details'>
                            <SiNodemon className='experience_details-icon' />
                            <div>
                                <h4>Nodemailer</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>

                        <article className='experience_details'>
                            <RiMailSendFill className='experience_details-icon' />
                            <div>
                                <h4>SendGrid</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>

                        <article className='experience_details'>
                            <MdAlternateEmail className='experience_details-icon' />
                            <div>
                                <h4>mailgun</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>

                        <article className='experience_details'>
                            <SiSymphony className='experience_details-icon' />
                            <div>
                                <h4>Stripe JS</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>

                        <article className='experience_details'>
                            <SiRedux className='experience_details-icon' />
                            <div>
                                <h4>Redux</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>

                        <article className='experience_details'>
                            <TbApi className='experience_details-icon' />
                            <div>
                                <h4>API</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>

                        <article className='experience_details'>
                            <SiPython className='experience_details-icon' />
                            <div>
                                <h4>Python</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>

                        <article className='experience_details'>
                            <SiDjango className='experience_details-icon' />
                            <div>
                                <h4>Django</h4>
                                <small className='text-light'>intermediate</small>
                            </div>
                        </article>

                        <article className='experience_details'>
                            <GrMysql className='experience_details-icon' />
                            <div>
                                <h4>MySQL</h4>
                                <small className='text-light'>Basic</small>
                            </div>
                        </article>

                    </div>
                </div>
            </div>

        </section>
    );
};

export default Experience;