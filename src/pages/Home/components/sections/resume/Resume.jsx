import "./resume.css";

export const Resume = () => {
    return (
        <section id="resume" className="resume">
            <div className="container">

                <div className="section-title">
                    <h2>Resumen</h2>
                    <p>A continuación encontraras el camino profesional y personal que da soporte a la calidad y el desempeño de
                        los trabajos realizados, y por realizar</p>
                </div>

                <div className="row">
                    <div className="col-lg-6" data-aos="fade-up">
                        <h3 className="resume-title">Experiencia profesional</h3>
                        <div className="resume-item">
                            <h4>COORDINADOR BUSINESS ANALYTICS SCA&C</h4>
                            <h5>Octubre 2021 - Julio 2022 (6 meses)</h5>
                            <p><em>Cemex Central - Mexico</em></p>
                            <ul>
                                <li>Modelo de información vistas, datasets, dentro de snowflake y sap hana</li>
                                <li>Power automate, SFTP/ FTP, shellscripting, SMTP SAP / Hana.<b />
                                </li>
                                <li>Desarrollo de tableros Power Bi informes predictivos y descriptivos, optimización de datasets, dataflows en proyectos a nivel mundial Cemex <b />
                                </li>
                                <li>Soporte aplicativos web desarrollados internamente<b />
                                </li>                               
                            </ul>
                        </div>
                        <div className="resume-item">
                            <h4>COORDINADOR INFORMACION COMERCIAL COL y SCA&C </h4>
                            <h5>Octubre 2021 - Julio 2022 (6 meses)</h5>
                            <p><em>Cemex Colombia</em></p>
                            <ul>
                                <li>Manejo y migración de servidores on premise y cloud</li>
                                <li>Power automate, SFTP/ FTP, shellscripting, SMTP SAP / Hana.<b />
                                </li>
                                <li>Manejo de Power Bi para despliegue de informes predictivos y descriptivos, optimización de datasets<b />
                                </li>
                                <li>Migración aplicativos a React - .net / TS C# <b />
                                </li>
                                <li>DBA,  creación, soporte e integración de ETL, con servicios de reporting, SMTP, SSRS, SSIS <b />
                                </li>
                            </ul>
                        </div>
                        <div className="resume-item">
                            <h4>COORDINADOR DE INFORMACION Y HERRAMIENTAS COMERCIALES</h4>
                            <h5>Mayo 2021 - Octubre 2021 (6 meses)</h5>
                            <p><em>Cemex Colombia</em></p>
                            <ul>
                                <li>Desarrollo fullstack Angular 11 - .net aplicativos de control interno.</li>
                                <li>Migración de aplicativos a stack Angular 11 - .net, diseño de interfaces UI/UX <b />
                                </li>
                                <li>Despliegue de aplicativos, manejo de servidores tanto de almacenamiento, cómo de despliegue<b />
                                </li>
                                <li>DBA,  creación, soporte e integración de ETL, con servicios de reporting, SMTP, SSRS, SSIS <b />
                                </li>
                                <li>Soporte general aplicativos y demas herramientas implementadas, para Colombia y Peru<b />
                                </li>
                            </ul>
                        </div>
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


                    </div>
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
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
                </div>

            </div>
        </section>
    )
}
