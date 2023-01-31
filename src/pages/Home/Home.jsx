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
import { useCallback } from 'react';
import { loadFull } from "tsparticles";
import { Contact } from './components/sections/contact/Contact';
import { SlArrowDown } from "react-icons/sl";

SlArrowDown
export const Home = () => {

    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
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
                    />

                    <div className='hero-container' data-aos='fade-in'>
                        <h1>Juan Diego Tovaria</h1>
                        <p>Soy <span className='typed' data-typed-items='Programador, Diseñador, Freelance, Investigador'></span></p>
                    </div>
                    <div className="scrollDown pb-4">
                        <SlArrowDown className='mb-2'/>
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
