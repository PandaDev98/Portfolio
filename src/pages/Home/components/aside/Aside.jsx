import React from 'react'
import "./aside.css";
import { BsFacebook, BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
export const Aside = () => {
    return (
        <header id='header'>
            <div className='d-flex flex-column'>
                <div className='profile'>
                    <img src='src\assets\images\profile-img.jpg' className='img-fluid rounded-circle' alt='' />
                    <h1 className='text-light'><a href='index.html'>Juan Diego</a></h1>
                    <div className='social-links mt-3 text-center'>

                        <a href='https://www.facebook.com/juandiego.tovariacastro/' target='blank' className='facebook'><BsFacebook /></a>
                        <a href='https://www.instagram.com/juan_diego_tovaria/' target='blank' className='instagram'><BsInstagram /></a>
                        <a href='https://github.com/PandaDev98' target='blank' className='google-plus'><BsGithub /></a>
                        <a href='https://www.linkedin.com/in/juan-diego-tovaria-castro-b806b4158/' target='blank' className='linkedin'><BsLinkedin /></a>
                    </div>
                </div>

                <nav className='nav-menu'>
                    <ul>
                        <li className='active'><a href='index.html'><i className='bx bx-home'></i> <span>Inicio</span></a></li>
                        <li><a href='#about'><i className='bx bx-user'></i> <span>Acerca de mi</span></a></li>
                        <li><a href='#resume'><i className='bx bx-file-blank'></i> <span>Resumen</span></a></li>
                        <li><a href='#portfolio'><i className='bx bx-book-content'></i> Portfolio</a></li>
                        <li><a href='#services'><i className='bx bx-server'></i> Servicios</a></li>
                        <li><a href='#contact'><i className='bx bx-envelope'></i> Contacto</a></li>

                    </ul>
                </nav>
                <button type='button' className='mobile-nav-toggle d-xl-none'><i className='icofont-navigation-menu'></i></button>

            </div>
        </header>
    )
}
