import React from 'react';
import './About.css';
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'


const About = () => {
    return (
        <section id='about'>
            <h3 className='sub-title'>Get to Know</h3>
            <h1>About me</h1>
            <div className="container about_container">
                <div className="about_me">
                    <div className="about_me-image">
                        <img src={ME} alt="" />
                    </div>
                </div>
                <div className="about_content">
                    <div className="about_cards">

                        <article className='about_card'>
                            <FaAward className='about_icon' />
                            <h4>Experience</h4>
                            <small>12+ Months Working</small>

                        </article>

                        <article className='about_card'>
                            <FiUsers className='about_icon' />
                            <h4>Clients</h4>
                            <small>100+ Worldwide</small>

                        </article>

                        <article className='about_card'>
                            <VscFolderLibrary className='about_icon' />
                            <h4>Projects</h4>
                            <small>50+ Completed</small>

                        </article>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Iure soluta officiis nemo doloremque consequuntur voluptate.
                        ipsum dolor sit amet consectetur adipisicing elit. Quia, vero?,
                        ipsum dolor sit amet consectetur adipisicing elit. Quasi
                        id libero corrupti qui quis incidunt ipsam exercitationem nihil
                        minus consequuntur, maiores ullam, dolorum iusto odio fugit,
                        repellat quisquam distinctio ipsa. ipsum dolor sit amet,
                        consectetur adipisicing elit. Labore,
                        reiciendis! ipsum dolor sit amet consectetur adipisicing elit.
                        Beatae delectus ad hic laboriosam et dolor quo consectetur,
                        porro soluta accusamus?
                    </p>
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>

        </section>
    );
};

export default About;