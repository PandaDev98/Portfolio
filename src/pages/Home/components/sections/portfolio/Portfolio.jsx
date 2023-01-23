import "./portfolio.css";
export const Portfolio = () => {
    return (
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

    )
}
