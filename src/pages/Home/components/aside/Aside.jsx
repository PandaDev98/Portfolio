import React from 'react'
import "./aside.css";
import { BsInstagram, BsGithub, BsLinkedin, BsHouse, BsPerson, BsFileEarmarkBarGraph, BsFolder2Open, BsEnvelope, BsCodeSlash } from "react-icons/bs";
import { useState } from 'react';


export const Aside = () => {
    const [focusedId, setFocusedId] = useState(1);

    const handleClick = (id) => {
        setFocusedId(id);
    };

    return (
        <header id='header'>
            <div className='d-flex flex-column'>
                <div className='profile mt-2'>
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">

                                <img src='.\images\profile-img.jpg' className='img-fluid rounded-circle' alt='' />
                                <h1 className='text-light'><a href='index.html'>Juan Diego</a></h1>
                            </div>
                            <div className="flip-card-back">
                                <img src='.\images\PandaDev.png' className='img-fluid rounded-circle mt-1' alt='' />
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
                        <li
                            className={focusedId === 1 ? 'active' : ''}
                            onClick={() => handleClick(1)}
                        >
                            <a href='index.html'>
                                <BsHouse className='mx-2' />
                                Inicio
                            </a>
                        </li>
                        <li
                            className={focusedId === 2 ? 'active' : ''}
                            onClick={() => handleClick(2)}
                        >
                            <a href='#about'><BsPerson className='mx-2' />
                                Acerca de mi</a></li>
                        <li
                            className={focusedId === 3 ? 'active' : ''}
                            onClick={() => handleClick(3)}
                        >
                            <a href='#resume'><BsFileEarmarkBarGraph className='mx-2' />
                                Resumen</a></li>
                        <li
                            className={focusedId === 4 ? 'active' : ''}
                            onClick={() => handleClick(4)}
                        >
                            <a href='#portfolio'><BsFolder2Open className='mx-2' /> Portfolio</a></li>
                        <li
                            className={focusedId === 5 ? 'active' : ''}
                            onClick={() => handleClick(5)}
                        >
                            <a href='#contact'><BsEnvelope className='mx-2' /> Contacto</a></li>

                    </ul>
                </nav>
                <button type='button' className='mobile-nav-toggle d-xl-none'><i className='icofont-navigation-menu'></i></button>

            </div>
        </header>
    )
}
