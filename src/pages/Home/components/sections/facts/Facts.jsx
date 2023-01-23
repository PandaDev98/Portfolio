import CountUp from 'react-countup';

import "./facts.css";

export const Facts = () => {

    const stackeholders = 185;
    const projects = 25;
    const supportHours = 1820;
    const teams = 6;

    const calculateDelay = (hours, countTime) => countTime / hours;

    return (

        <section id="facts" className="facts">
            <div className="container">

                <div className="section-title">
                    <h2>Hechos</h2>
                    <p>A lo largo de mi carrera laboral, he desarrollado y aplicado habilidades esenciales como el trabajo en equipo, la escucha activa, la definición de requerimientos y la proyección de tiempos con el objetivo de garantizar la satisfacción del cliente final. Estas habilidades me han permitido colaborar eficazmente con mis compañeros de trabajo y entender las necesidades de los clientes para ofrecer soluciones eficaces y a tiempo.</p>
                </div>
                <div className="row no-gutters">

                    <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up">
                        <div className="count-box">
                            <CountUp
                                end={stackeholders}
                                duration={calculateDelay(stackeholders, 100)}
                                delay={-1}
                                enableScrollSpy={true}
                                suffix={'+'}
                            />
                            <p><strong>Stakeholders Felices</strong> <br /> Y vienen más!</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="100">
                        <div className="count-box">
                            <i className="icofont-document-folder"></i>
                            <CountUp
                                end={projects}
                                duration={1}
                                delay={-1}
                                enableScrollSpy={true}
                            />
                            <p><strong>Projectos</strong> <br /> y vamos por más!</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="200">
                        <div className="count-box">
                            <i className="icofont-live-support"></i>
                            <CountUp
                                end={supportHours}
                                duration={calculateDelay(supportHours, 1500)}
                                enableScrollSpy={true}
                                separator={','}
                            />
                            <p><strong>Horas de soporte</strong><br /> Escuchando activamente</p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="300">
                        <div className="count-box">
                            <i className="icofont-users-alt-5"></i>
                            <CountUp
                                end={teams}
                                duration={calculateDelay(teams, 1)}
                                enableScrollSpy={true}
                            />
                            <p><strong>Equipos de trabajo</strong><br /> Adaptarse y dar lo mejor</p>
                        </div>
                    </div>

                </div>

            </div>
        </section>

    )
}
