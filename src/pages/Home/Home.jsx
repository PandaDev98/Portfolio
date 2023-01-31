import './style.css'

import { } from "react-icons/bs";
import { Aside } from './components/aside/Aside';
import { About } from './components/sections/about/About';
import { Facts } from './components/sections/facts/Facts';
import { Skills } from './components/sections/skills/Skills';
import { Resume } from './components/sections/resume/Resume';
import { Portfolio } from './components/sections/portfolio/Portfolio';
import config from '../../data/particles';
import Particles from "react-tsparticles";
import { useCallback, useEffect } from 'react';
import { loadFull } from "tsparticles";
import { Contact } from './components/sections/contact/Contact';
import { SlArrowDown } from "react-icons/sl";
import { useState } from 'react';

export const Home = () => {
    const [text, setText] = useState("");

    const targetTextArr = ['Programador', 'Diseñador', 'DBA', 'Freelance', 'Investigador'];


    useEffect(() => {
        let currentIndex = 0;
        const type = async targetText => {
            for (let i = 1; i <= targetText.length; i++) {
                await new Promise(resolve => {
                    setTimeout(resolve, 100);
                });
                setText(targetText.substring(0, i));
            }
            setTimeout(() => {
                currentIndex = (currentIndex + 1) % targetTextArr.length;
                type(targetTextArr[currentIndex]);
            }, 1000);
        };
        type(targetTextArr[currentIndex]);
    }, []);

    const particlesInit = useCallback(async engine => {

        await loadFull(engine);
    }, []);


    return (
        <div id='parent'>
            <div id='side_bar'>
                <Aside />
                <section id='hero' className='d-flex flex-column justify-content-center '>

                    <Particles
                        id="particles-js"
                        options={config}
                        init={particlesInit}
                        width={window.outerWidth}
                    />

                    <div className='hero-container' data-aos='fade-in'>
                        <h1>Juan Diego Tovaria</h1>
                        <p>Soy <span className='typed' data-typed-items='Programador, Diseñador, Freelance, Investigador'>{text}</span></p>
                    </div>
                    <div className="scrollDown pb-4">
                        <SlArrowDown className='mb-2' />
                        <span id='scroll'>SCROLL</span>
                    </div>
                </section>

                <div id="main">
                    <About />
                    <Facts />
                    <Skills />
                    <Resume />
                    <Portfolio />
                    <Contact />
                </div>
            </div >
        </div >
    )
}
