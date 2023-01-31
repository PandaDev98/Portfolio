import React from 'react'
import './contact.css'
import { BsFacebook, BsInstagram, BsGithub, BsLinkedin, BsHouse, BsPerson, BsFileEarmarkBarGraph, BsFolder2Open, BsTerminal, BsEnvelope, BsCodeSlash } from "react-icons/bs";


export const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="container">

                <div className="section-footer">
                    <h2>Contacto</h2>
                    <p className='text-center px-2'>Está fue una pequeña descripción como desarrollador, si quieres conocerme más, enviame un correo y charlemos, sera un gusto el trabajar contigo y descubrir nuevas maneras de mejorar cualquier proceso <a href="mailto:juandiegotovaria@hotmail.com"> Send a Mail</a></p>
                </div>
                <hr />
                <div className='social-links mt-3 text-center'>
                    <a href='https://www.linkedin.com/in/juan-diego-tovaria-castro-b806b4158/' target='blank' ><BsLinkedin /></a>
                    <a href='https://github.com/PandaDev98' target='blank' ><BsGithub /></a>
                    <a href='https://www.codewars.com/users/PandaDev98' target='blank' ><BsCodeSlash /></a>
                    <a href='https://www.instagram.com/juan_diego_tovaria/' target='blank' ><BsInstagram /></a>

                </div>
            </div>
        </section>
    )
}
