import React from 'react';
import './Resume.css';
import { GiEarthAsiaOceania } from "react-icons/gi";
import { BiPhone } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineLinkedin } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { TbLanguage } from "react-icons/tb";
import pdf from "./pdf/Mawiya Al Wafai.pdf";


const Resume = () => {
    return ( 
        <main className='resume' style={{overflowX: 'hidden'}}>
            <div className='col'>
                <div className='row'>
                    <div className='res'>
                        <h1>Software Engineer - Cybersecurity</h1>
                        <div className='icons1'>
                            <div className='row'>
                                <div className='col'>
                                    <HiOutlineLocationMarker size={20}/><span className='info'>Riyadh, Saudi Arabia </span> 
                                    <br/>
                                    <BiPhone size={20}/><span className='info'>+966 56 4387 743</span>
                                    <br/>
                                    <GiEarthAsiaOceania size={20}/><span className='info'>Syrian-Turkish</span>
                                </div>
                                <div className='col-8'>
                                    <AiOutlineLinkedin size={20}/><span className='info'>/in/mawiya-al-wafai-034b78206/</span>
                                    <br/>
                                    <MdOutlineEmail size={20}/><span className='info'>mawiyawafaie@gmail.com</span>
                                    <br/>
                                    <TbLanguage size={20}/><span className='info'>Arabic - English - Turkish(Beginner)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a className='btn bt' href={pdf} download="Mawiya Al Wafai.pdf" style={{backgroundColor: '#62b1ba'}}>Download Résumé</a>
            </div>
            <br/>
            <br/>
        </main>
     );
}
 
export default Resume;