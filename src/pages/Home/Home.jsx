import './style.css'

import { } from "react-icons/bs";
import { Aside } from './components/aside/Aside';
import { About } from './components/sections/about/About';
import { Facts } from './components/sections/facts/Facts';
import { Skills } from './components/sections/skills/Skills';
import { Resume } from './components/sections/resume/Resume';
export const Home = () => {
    return (
        <div id='parent'>
            <div id='side_bar'>
                <Aside />

                <section id='hero' className='d-flex flex-column justify-content-center align-items-center'>
                    <div className='hero-container' data-aos='fade-in'>
                        <h1>Juan Diego Tovaria</h1>
                        <p>Soy <span className='typed' data-typed-items='Programador, Diseñador, Freelance, Investigador'></span></p>
                    </div>
                </section>

                <div id="main">

                    <About />

                    <Facts />

                    <Skills />


                    <Resume />
                              

                    {/* <section id="contact" className="contact">
                        <div className="container">

                            <div className="section-title">
                                <h2>contacto</h2>
                                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
                                    consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
                                    in iste officiis commodi quidem hic quas.</p>
                            </div>

                            <div className="row" data-aos="fade-in">

                                <div className="col-lg-5 d-flex align-items-stretch">
                                    <div className="info">
                                        <div className="address">
                                            <i className="icofont-google-map"></i>
                                            <h4>Location:</h4>
                                            <p>A108 Adam Street, New York, NY 535022</p>
                                        </div>

                                        <a href="mailto:juandiegotovaria@hotmail.com">
                                            <div className="email">
                                                <i className="icofont-envelope"></i>
                                                <h4>Email:</h4>
                                                <p>juandiegotovaria@hotmail.com</p>
                                            </div>
                                        </a>

                                        <div className="phone">
                                            <i className="icofont-phone"></i>
                                            <h4>Call:</h4>
                                            <p>+1 5589 55488 55s</p>
                                        </div>

                                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameBorder="0" allowFullScreen></iframe>
                                    </div>

                                </div>

                                <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                                    <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                                        <div className="row">
                                            <div className="form-group col-md-6">
                                                <label htmlFor="name">Your Name</label>
                                                <input type="text" name="name" className="form-control" id="name" data-rule="minlen:4"
                                                    data-msg="Please enter at least 4 chars" />
                                                <div className="validate"></div>
                                            </div>
                                            <div className="form-group col-md-6">
                                                <label htmlFor="name">Your Email</label>
                                                <input type="email" className="form-control" name="email" id="email" data-rule="email"
                                                    data-msg="Please enter a valid email" />
                                                <div className="validate"></div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="name">Subject</label>
                                            <input type="text" className="form-control" name="subject" id="subject" data-rule="minlen:4"
                                                data-msg="Please enter at least 8 chars of subject" />
                                            <div className="validate"></div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="name">Message</label>
                                            <textarea className="form-control" name="message" rows="10" data-rule="required"
                                                data-msg="Please write something for us"></textarea>
                                            <div className="validate"></div>
                                        </div>
                                        <div className="mb-3">
                                            <div className="loading">Loading</div>
                                            <div className="error-message"></div>
                                            <div className="sent-message">Your message has been sent. Thank you!</div>
                                        </div>
                                        <div className="text-center"><button type="submit">Send Message</button></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section> */}

                </div>
            </div >
            <div id='main_content'>
                <p>main content</p>
            </div>
        </div >
    )
}
