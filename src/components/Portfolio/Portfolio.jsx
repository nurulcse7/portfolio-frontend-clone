import React from 'react';
import './Portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
    {
        "id": 1,
        "image": IMG1,
        "title": "Bike Parts",
        "github": "https://github.com/",
        "demo": "https://bike-parts-ce30d.web.app/"
    },
    {
        "id": 2,
        "image": IMG2,
        "title": "Project title here 02",
        "github": "https://github.com/",
        "demo": "https://bike-parts-ce30d.web.app/"
    },
    {
        "id": 3,
        "image": IMG3,
        "title": "Project title here 03",
        "github": "https://github.com/",
        "demo": "https://bike-parts-ce30d.web.app/"
    },
    {
        "id": 4,
        "image": IMG4,
        "title": "Project title here 04",
        "github": "https://github.com/",
        "demo": "https://bike-parts-ce30d.web.app/"
    },
    {
        "id": 5,
        "image": IMG5,
        "title": "Project title here 05",
        "github": "https://github.com/",
        "demo": "https://bike-parts-ce30d.web.app/"
    },
    {
        "id": 6,
        "image": IMG6,
        "title": "Project title here 06",
        "github": "https://github.com/",
        "demo": "https://bike-parts-ce30d.web.app/"
    }
]

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h3 className='sub-title'>My Recent Work</h3>
            <h1>Portfolio</h1>

            <div className="container portfolio_container">
                {
                    data.map(({ id, image, title, github, demo }) => {
                        return (
                            <article key={id} className="portfolio_item">
                                <div className="portfolio_item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio_item-cta">
                                    <a href={github} className='btn'>GitHub</a>
                                    <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    );
};

export default Portfolio;