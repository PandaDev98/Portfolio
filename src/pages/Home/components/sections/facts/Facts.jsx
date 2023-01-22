import CountUp from 'react-countup';
import { BiHappyBeaming } from 'react-icons/Bi';
import "./facts.css";

export const Facts = () => {
    return (
        <section id="facts" className="facts">
            <div className="container">

                <div className="section-title">
                    <h2>Hechos</h2>
                    <p>A lo largo de mi carrera laboral el trabajo en equipo, la escucha activa y el dar al cliente lo que quiere
                        y necesita son de suma importancia, siendo estas habilidaddes que he venido fortaleciendo en varios factores
                        principales siempre con la busqueda de la felicidad del cliente.</p>
                </div>

                <div className="row no-gutters">

                    <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
                        <div className="count-box">
                            <span data-toggle="counter-up">
                                <CountUp
                                    end={210}
                                    duration={1}
                                />
                                  {({ countUpRef, start }) => (
                                <div>
                                    <span ref={countUpRef} />
                                    <button onClick={start}>Start</button>
                                </div>
                            )}
                            </span>
                          
                            <p><strong>Stakeholders Felices</strong> <br /> Y vienen más!</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="100">
                        <div className="count-box">
                            <i className="icofont-document-folder"></i>
                            <span data-toggle="counter-up">21</span>
                            <p><strong>Projectos</strong> <br /> y vamos por más!</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="200">
                        <div className="count-box">
                            <i className="icofont-live-support"></i>
                            <span data-toggle="counter-up">1,463</span>
                            <p><strong>Horas de soporte</strong><br /> Escuchando activamente</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="300">
                        <div className="count-box">
                            <i className="icofont-users-alt-5"></i>
                            <span data-toggle="counter-up">10</span>
                            <p><strong>Equipos de trabajo</strong><br /> Adaptarse y dar lo mejor</p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}
