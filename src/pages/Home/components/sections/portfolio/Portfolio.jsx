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

                <div className="container">

                    <div className=" col-12 portfolio-container">
                        <h1>Subaru</h1>
                        <div className="projectDesc">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus minus velit autem libero repellendus laboriosam optio, adipisci, ratione ipsam inventore esse, corrupti hic quisquam at rem unde in fugit eius?</p>
                        </div>
                        <div className="projectTech">
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus minus velit autem libero repellendus laboriosam optio, adipisci, ratione ipsam inventore esse, corrupti hic quisquam at rem unde in fugit eius?</p>
                        </div>
                        <div className="imgCarousel">
                            <img className="img-fluid" src="src\assets\images\portfolioImages\CotizaTuSubaru\logosubaru.png" alt="" />
                            <img src="src\assets\images\portfolioImages\CotizaTuSubaru\1.png" alt="" />
                            <img src="src\assets\images\portfolioImages\CotizaTuSubaru\2.png" alt="" />
                            <img src="src\assets\images\portfolioImages\CotizaTuSubaru\3.png" alt="" />
                            <img src="src\assets\images\portfolioImages\CotizaTuSubaru\4.png" alt="" />
                            <img src="src\assets\images\portfolioImages\CotizaTuSubaru\5.png" alt="" />

                        </div>

                    </div>

                    <div className=" portfolio-container" >
                        <h1>Subaru</h1>
                        <div className="imgCarousel">
                            <img className="img-fluid" src="src\assets\images\portfolioImages\CotizaTuSubaru\logosubaru.png" alt="" />
                            <img src="src\assets\images\portfolioImages\CotizaTuSubaru\1.png" alt="" />
                            <img src="src\assets\images\portfolioImages\CotizaTuSubaru\2.png" alt="" />
                            <img src="src\assets\images\portfolioImages\CotizaTuSubaru\3.png" alt="" />
                            <img src="src\assets\images\portfolioImages\CotizaTuSubaru\4.png" alt="" />
                            <img src="src\assets\images\portfolioImages\CotizaTuSubaru\5.png" alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </section>

    )
}
