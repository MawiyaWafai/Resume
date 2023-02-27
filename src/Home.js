import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io";
import Typed from 'react-typed';
import React from 'react';

const Home = () => {
    return ( 
        <div>
          <h3>Hello, I'm Mawiya Al Wafai</h3>
          <p>
            <br/>As a software engineer, I care about creating  
            <br/><span className="use">useful</span>, <span className="user">user centric</span>, and <span className="learn">learnable</span> products that  
            <br/>bridge the gap between design and development.
            <span className="icons">
            <a className="linked" href="https://www.linkedin.com/in/mawiya-al-wafai-034b78206/" rel="noreferrer" target={'_blank'}>
              <FaLinkedin />
            </a>
            <a className="envelope" href="mailto:mawiyawafaie@gmail.com" rel="noreferrer" target={'_blank'}>
              <SiGmail />
            </a>
            <a className="phone" href="https://wa.me/+966564387743" rel="noreferrer" target={'_blank'}>
              <IoLogoWhatsapp />
            </a>
            <a className="github" href="https://github.com/MawiyaWafai" rel="noreferrer" target={'_blank'}>
              <IoLogoGithub />
            </a>
            </span>
          </p>
          <img className="img" src={require('./img/im2.png')} alt="img" />
          <div className="type">
            <Typed
                  strings={[
                      'This Website is Written in React JS']}
                      typeSpeed={40}
                      backSpeed={50}
                      loop >
            </Typed>
          </div>
        </div>
     );
}
 
export default Home;