import React from 'react'
import "./aside.css";
import { BsInstagram, BsGithub, BsLinkedin, BsHouse, BsPerson, BsFileEarmarkBarGraph, BsFolder2Open, BsEnvelope, BsCodeSlash } from "react-icons/bs";

export const Aside = () => {
    return (
        <header id='header'>
            <div className='d-flex flex-column'>
                <div className='profile mt-2'>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">

                                <img src='.\src\assets\images\profile-img.jpg' className='img-fluid rounded-circle' alt='' />
                                <h1 className='text-light'><a href='index.html'>Juan Diego</a></h1>
                            </div>
                            <div className="flip-card-back">
                                <img src='.\src\assets\images\PandaDev.png' className='img-fluid rounded-circle mt-1' alt='' />
                                <h1 className='text-light'><a href='index.html'>Panda Dev</a></h1>
                            </div>

                        </div>

                    </div>

                    <div className='social-links mt-3 text-center'>
                        <a href='https://www.linkedin.com/in/juan-diego-tovaria-castro-b806b4158/' target='blank' ><BsLinkedin /></a>
                        <a href='https://github.com/PandaDev98' target='blank' ><BsGithub /></a>
                        <a href='https://www.codewars.com/users/PandaDev98' target='blank' ><BsCodeSlash /></a>
                        <a href='https://www.instagram.com/juan_diego_tovaria/' target='blank' ><BsInstagram /></a>

                    </div>
                </div>

                <nav className='nav-menu'>
                    <ul>
                        <li className='active'><a href='index.html'><BsHouse className='mx-2' /><span>Inicio</span></a></li>
                        <li><a href='#about'><BsPerson className='mx-2' /> <span>Acerca de mi</span></a></li>
                        <li><a href='#resume'><BsFileEarmarkBarGraph className='mx-2' /> <span>Resumen</span></a></li>
                        <li><a href='#portfolio'><BsFolder2Open className='mx-2' /> Portfolio</a></li>
                        <li><a href='#contact'><BsEnvelope className='mx-2' /> Contacto</a></li>

                    </ul>
                </nav>
                <button type='button' className='mobile-nav-toggle d-xl-none'><i className='icofont-navigation-menu'></i></button>

            </div>
        </header>
    )
}
