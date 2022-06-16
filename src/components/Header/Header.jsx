import React from 'react';
import CTA from './CTA';
import './Header.css'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials';

const Header = () => {
    return (
        <header>
            <div className="container header_container">
                <h3>Hello I'm</h3>
                <h1>Nurul Islam</h1>
                <h2 className="text-light">Fullstack Web & Apps Developer</h2>
                <CTA></CTA>
                <HeaderSocials></HeaderSocials>
                
                <div className="me">
                    <img src={ME} alt="" />
                </div>

                <a href="#footer" className='scroll_down'>Scroll Down</a>

            </div>
        </header>
    );
};

export default Header;