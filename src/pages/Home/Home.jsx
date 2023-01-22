import './style.css'

import { } from "react-icons/bs";
import { Aside } from './components/aside/Aside';
import { About } from './components/sections/about/About';
import { Facts } from './components/sections/facts/Facts';

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
                    <section id="skills" className="skills section-bg">
                        <div className="container">

                            <div className="section-title">
                                <h2>Skills</h2>
                                <p>Habilidades que se han desarrollado a lo largo de cada proyecto, implementación, hackaton, se han venido
                                    fortaleciendo y gracias a cada aprendizaje, hace que los proyectos sean uno mejor que el anterior cada día.
                                </p>
                            </div>

                            <div className="row skills-content">

                                <div className="col-lg-6" data-aos="fade-up">

                                    <div className="progress">
                                        <span className="skill">Angular <i className="val">70%</i></span>
                                        <div className="progress-bar-wrap">
                                            <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                                            </div>
                                        </div>
                                    </div>

                                    <div className="progress">
                                        <span className="skill">CSS <i className="val">90%</i></span>
                                        <div className="progress-bar-wrap">
                                            <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                            </div>
                                        </div>
                                    </div>

                                    <div className="progress">
                                        <span className="skill">JavaScript <i className="val">75%</i></span>
                                        <div className="progress-bar-wrap">
                                            <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">

                                    <div className="progress">
                                        <span className="skill">JAVA <i className="val">70%</i></span>
                                        <div className="progress-bar-wrap">
                                            <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                                            </div>
                                        </div>
                                    </div>

                                    <div className="progress">
                                        <span className="skill">SQL <i className="val">80%</i></span>
                                        <div className="progress-bar-wrap">
                                            <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                                            </div>
                                        </div>
                                    </div>

                                    <div className="progress">
                                        <span className="skill">Git Hub <i className="val">70%</i></span>
                                        <div className="progress-bar-wrap">
                                            <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </section>

                    <section id="resume" className="resume">
                        <div className="container">

                            <div className="section-title">
                                <h2>Resumen</h2>
                                <p>A continuación encontraras el camino profesional y personal que da soporte a la calidad y el desempeño de
                                    los trabajos realizados, y por realizar</p>
                            </div>

                            <div className="row">
                                <div className="col-lg-6" data-aos="fade-up">
                                    <h3 className="resume-title">Profesional</h3>
                                    <div className="resume-item pb-0">
                                        <h4>Juan Diego Tovaria</h4>
                                        <p><em>Ingenieron en informatica con enfoques en desarrollo web mediante frameworks de desarrollo como
                                            angular, con pasión por la investigación y el continuo mejoramiento en proyectos retadores y que
                                            aportan a la comunidad, con experiencia basada en proyectos universitarios, y laborales con empresas
                                            de sectores multinacionales.</em></p>
                                        <ul>
                                            <li>Bogotá Colombia</li>
                                            <li>3005944681</li>
                                            <a href="mailto:juandiegotovaria@hotmail.com">
                                                <li>juandiegotovaria@hotmail.com</li>
                                            </a>
                                        </ul>
                                    </div>

                                    <h3 className="resume-title">Educación</h3>
                                    <div className="resume-item">
                                        <h4>Bachiller Academico</h4>
                                        <h5>2004 - 2015</h5>
                                        <p><em>I.E.D.R Pablo Herrera</em></p>
                                        <p>Mejor prueba de estado - ICFES institucional</p>
                                    </div>
                                    <div className="resume-item">
                                        <h4>Tecnico en sistemas</h4>
                                        <h5>2014 - 2015</h5>
                                        <p><em>CIDE</em></p>
                                        <p>Tecnico en sistemas · (2014 - 2015)</p>
                                    </div>
                                    <div className="resume-item">
                                        <h4>Ingeniero en informática</h4>
                                        <h5>2016 - 2021</h5>
                                        <p><em>Universidad de La Sabana</em></p>
                                        <p>Beca mejor ICFES</p>
                                    </div>
                                </div>
                                <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                                    <h3 className="resume-title">Experiencia profesional</h3>
                                    <div className="resume-item">
                                        <h4>Business service organization - soporte y desarrollo</h4>
                                        <h5>2020 - 2021 (6 meses)</h5>
                                        <p><em>Cemex Colombia</em></p>
                                        <ul>
                                            <li>Desarrollo Fullstack Angular - .Net en aplicativos para manejo de proyectos
                                                con implementación de metodolgias Agile - Scrum</li>
                                            <li>Soporte de bases de datos</li>
                                            <li>Soporte de bases de Excel / Macros</li>
                                            <li>Soporte de aplicativos .Net, Sap Hybris / integraciones, entre otros
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="resume-item">
                                        <h4>DESARROLLADOR WEB</h4>
                                        <h5>Octubre 2019 - Marzo de 2020 (1 año - 6 meses)</h5>
                                        <p><em>Qubit</em></p>
                                        <ul>
                                            <li>Desarrollo Frontend Angular 10 en proyecto empresarial impulsado por concurso de
                                                innovacion de colciencias para manejo de inventario, personal, distribución y
                                                despacho de pedidos - <b> 1 AÑO</b></li>
                                            <li>- Desarrollador web front end, de juego de carácter interno para la empresa
                                                Ipsos Napoleón Franco - <b>6 MESES</b>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="resume-item">
                                        <h4>DESARROLLADOR WEB</h4>
                                        <h5>Noviembre 2019 - Febrero 2020 (4 meses)</h5>
                                        <p><em>Definity Live Communications</em></p>
                                        <ul>
                                            <li>Desarrollador web en Angular, investigador de soluciones empresariales, trabajo trasversal con Alexa
                                                development kit.</li>
                                            <li>
                                                - Desarrollador full stack Angular 9, Firebase Landing page Subaru Panamá con sistema de monitoreo y
                                                manejo de información referentes<b />
                                            </li>

                                            <li>- Desarrollador full stack Angular 9, Firebase Landing page Boing toys<b />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>

                    <section id="portfolio" className="portfolio section-bg">
                        <div className="container">

                            <div className="section-title">
                                <h2>Portafolio</h2>
                                <p>A continuación encontrara los proyectos que se han venido desarrollando a lo largo de la carrera
                                    profesional, en diferentes grupos de trabajo y las ultimas tecnologias para el mejor desarrollo posible.</p>
                            </div>

                            <div className="row" data-aos="fade-up">
                                <div className="col-lg-12 d-flex justify-content-center">
                                    <ul id="portfolio-flters">
                                        <li data-filter="*" className="filter-active">All</li>
                                        <li data-filter=".filter-app">App</li>
                                        <li data-filter=".filter-landing">Landing Page</li>
                                        <li data-filter=".filter-web">Web</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">
                                <div className="col-lg-4 col-md-6 portfolio-item filter-landing">
                                    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                                        <div className="carousel-inner">
                                            <div className="carousel-item active" data-bs-interval="10000">
                                                <img src="assets/img/Imagenes portafolio/CotizaTuSubaru/logosubaru.png" className="d-block w-100"
                                                    alt="..." />
                                            </div>
                                            <div className="carousel-item " data-bs-interval="10000">
                                                <img src="assets/img/Imagenes portafolio/CotizaTuSubaru/Screenshot_2.png" className="d-block w-100"
                                                    alt="..." />
                                            </div>
                                            <div className="carousel-item" data-bs-interval="2000">
                                                <img src="assets/img/Imagenes portafolio/CotizaTuSubaru/Screenshot_3.png" className="d-block w-100"
                                                    alt="..." />
                                            </div>
                                            <div className="carousel-item">
                                                <img src="assets/img/Imagenes portafolio/CotizaTuSubaru/Screenshot_4.png" className="d-block w-100"
                                                    alt="..." />
                                            </div>
                                        </div>
                                        <a className="carousel-control-prev" href="#carouselExampleDark" role="button" data-bs-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Previous</span>
                                        </a>
                                        <a className="carousel-control-next" href="#carouselExampleDark" role="button" data-bs-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Next</span>
                                        </a>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 portfolio-item filter-landing">
                                    <div id="Legendarios" className="carousel carousel-dark slide" data-bs-ride="carousel">
                                        <div className="carousel-inner">
                                            <div className="carousel-item active" data-bs-interval="10000">
                                                <img src="assets/img/Imagenes portafolio/CotizaTuSubaru/logosubaru.png" className="d-block w-100"
                                                    alt="..." />
                                            </div>
                                            <div className="carousel-item " data-bs-interval="10000">
                                                <img src="assets/img/Imagenes portafolio/Legendarios/Screenshot_5.png" className="d-block w-100"
                                                    alt="..." />
                                            </div>
                                            <div className="carousel-item">
                                                <img src="assets/img/Imagenes portafolio/CotizaTuSubaru/Screenshot_4.png" className="d-block w-100"
                                                    alt="..." />
                                            </div>
                                        </div>
                                        <a className="carousel-control-prev" href="#Legendarios" role="button" data-bs-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Previous</span>
                                        </a>
                                        <a className="carousel-control-next" href="#Legendarios" role="button" data-bs-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Next</span>
                                        </a>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/Imagenes portafolio/2da Regata Ecologica/IMG-20170909-WA0015.jpg" className="img-fluid"
                                            alt="" />
                                        <div className="portfolio-links">
                                            <a href="assets/img/Imagenes portafolio/2da Regata Ecologica/IMG-20170909-WA0015.jpg"
                                                data-gall="portfolioGallery" className="venobox" title="App 2"><i className="bx bx-plus"></i></a>
                                            <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 portfolio-item filter-landing">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/Imagenes portafolio/Boing to School/Screenshot_2.png" className="img-fluid" alt="" />
                                        <div className="portfolio-links">
                                            <a href="assets/img/Imagenes portafolio/Boing to School/Screenshot_2.png" data-gall="portfolioGallery"
                                                className="venobox" title="Card 2"><i className="bx bx-plus"></i></a>
                                            <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/Imagenes portafolio/Lad21/Screenshot_1.png" className="img-fluid" alt="" />
                                        <div className="portfolio-links">
                                            <a href="assets/img/Imagenes portafolio/Lad21/Screenshot_1.png" data-gall="portfolioGallery"
                                                className="venobox" title="Card 2"><i className="bx bx-plus"></i></a>
                                            <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                                        </div>
                                    </div>
                                </div>


                                <div className="col-lg-4 col-md-6 portfolio-item filter-app ">
                                    <div id="Lad21" className="carousel carousel-dark slide" data-bs-ride="carousel">
                                        <div className="carousel-inner">
                                            <div className="carousel-item active" data-bs-interval="10000">
                                                <img src="assets/img/Imagenes portafolio/Lad21/logo-1.png" className="d-block w-100" alt="..." />
                                            </div>
                                            <div className="carousel-item " data-bs-interval="10000">
                                                <img src="assets/img/Imagenes portafolio/Lad21/Screenshot_1.png" className="d-block w-100" alt="..." />
                                            </div>
                                            <div className="carousel-item" data-bs-interval="2000">
                                                <img src="assets/img/Imagenes portafolio/Lad21/Screenshot_2.png" className="d-block w-100" alt="..." />
                                            </div>
                                            <div className="carousel-item">
                                                <img src="assets/img/Imagenes portafolio/Lad21/Screenshot_3.png" className="d-block w-100" alt="..." />
                                            </div>
                                        </div>
                                        <a className="carousel-control-prev" href="#Lad21" role="button" data-bs-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Previous</span>
                                        </a>
                                        <a className="carousel-control-next" href="#Lad21" role="button" data-bs-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Next</span>
                                        </a>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-links">
                                            <a href="assets/img/portfolio/portfolio-7.jpg" data-gall="portfolioGallery" className="venobox"
                                                title="Card 1"><i className="bx bx-plus"></i></a>
                                            <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-links">
                                            <a href="assets/img/portfolio/portfolio-8.jpg" data-gall="portfolioGallery" className="venobox"
                                                title="Card 3"><i className="bx bx-plus"></i></a>
                                            <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                                    <div className="portfolio-wrap">
                                        <img src="assets/img/portfolio/portfolio-9.jpg" className="img-fluid" alt="" />
                                        <div className="portfolio-links">
                                            <a href="assets/img/portfolio/portfolio-9.jpg" data-gall="portfolioGallery" className="venobox"
                                                title="Web 3"><i className="bx bx-plus"></i></a>
                                            <a href="portfolio-details.html" title="More Details"><i className="bx bx-link"></i></a>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </section>

                    <section id="services" className="services">
                        <div className="container">

                            <div className="section-title">
                                <h2>Servicios</h2>
                                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
                                    consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
                                    in iste officiis commodi quidem hic quas.</p>
                            </div>

                            <div className="row">
                                <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
                                    <div className="icon"><i className="icofont-computer"></i></div>
                                    <h4 className="title"><a href="">Lorem Ipsum</a></h4>
                                    <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                                        occaecati cupiditate non provident</p>
                                </div>
                                <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                                    <div className="icon"><i className="icofont-chart-bar-graph"></i></div>
                                    <h4 className="title"><a href="">Dolor Sitema</a></h4>
                                    <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                        consequat tarad limino ata</p>
                                </div>
                                <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="200">
                                    <div className="icon"><i className="icofont-earth"></i></div>
                                    <h4 className="title"><a href="">Sed ut perspiciatis</a></h4>
                                    <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur</p>
                                </div>
                                <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
                                    <div className="icon"><i className="icofont-image"></i></div>
                                    <h4 className="title"><a href="">Magni Dolores</a></h4>
                                    <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                        mollit anim id est laborum</p>
                                </div>
                                <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="400">
                                    <div className="icon"><i className="icofont-settings"></i></div>
                                    <h4 className="title"><a href="">Nemo Enim</a></h4>
                                    <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                                        voluptatum deleniti atque</p>
                                </div>
                                <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="500">
                                    <div className="icon"><i className="icofont-tasks-alt"></i></div>
                                    <h4 className="title"><a href="">Eiusmod Tempor</a></h4>
                                    <p className="description">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum
                                        soluta nobis est eligendi</p>
                                </div>
                            </div>

                        </div>
                    </section>

                    {/* <section id="testimonials" className="testimonials section-bg">
                        <div className="container">

                            <div className="section-title">
                                <h2>Testimonios</h2>
                                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
                                    consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
                                    in iste officiis commodi quidem hic quas.</p>
                            </div>

                            <div className="owl-carousel testimonials-carousel">

                                <div className="testimonial-item" data-aos="fade-up">
                                    <p>
                                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                        Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium
                                        quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                    <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
                                    <h3>Saul Goodman</h3>
                                    <h4>Ceo &amp; Founder</h4>
                                </div>

                                <div className="testimonial-item" data-aos="fade-up" data-aos-delay="100">
                                    <p>
                                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                        Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis
                                        quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                    <img src="assets/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
                                    <h3>Sara Wilsson</h3>
                                    <h4>Designer</h4>
                                </div>

                                <div className="testimonial-item" data-aos="fade-up" data-aos-delay="200">
                                    <p>
                                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                        Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor
                                        labore quem eram duis noster aute amet eram fore quis sint minim.
                                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                    <img src="assets/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt="" />
                                    <h3>Jena Karlis</h3>
                                    <h4>Store Owner</h4>
                                </div>

                                <div className="testimonial-item" data-aos="fade-up" data-aos-delay="300">
                                    <p>
                                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                        Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim
                                        dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                    <img src="assets/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt="" />
                                    <h3>Matt Brandon</h3>
                                    <h4>Freelancer</h4>
                                </div>

                                <div className="testimonial-item" data-aos="fade-up" data-aos-delay="400">
                                    <p>
                                        <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                        Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa
                                        labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                                        <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                    </p>
                                    <img src="assets/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt="" />
                                    <h3>John Larson</h3>
                                    <h4>Entrepreneur</h4>
                                </div>

                            </div>

                        </div>
                    </section> */}

                    <section id="contact" className="contact">
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
                    </section>

                </div>
            </div >
            <div id='main_content'>
                <p>main content</p>
            </div>
        </div >
    )
}
