import { HiOutlineCake } from "react-icons/Hi";
import "./about.css";

export const About = () => {
    const bornYear = 1998;
    const actualYear = new Date().getFullYear();
    const birthDate = new Date(`November 19, ${actualYear}`);
    const birthDay = actualYear - bornYear;

    const isMyBirthday = () => {
        const today = new Date()
        return birthDate.getDate() == today.getDate() &&
            birthDate.getMonth() == today.getMonth() &&
            birthDate.getFullYear() == today.getFullYear()
    }

    return (
        <section id='about' className='about'>
            <div className="container">
                <div className="section-title">
                    <h2>Acerca de mi</h2>
                    <p>Soy un Ingeniero Informático con una sólida trayectoria en el desarrollo de soluciones de modelado de datos, desarrollo web y análisis de información. Mi experiencia abarca desde la implementación de proyectos de innovación utilizando tecnologías como Snowflake, SQL Server y Power BI, hasta la creación de aplicaciones web con JavaScript, TypeScript y C#. Apasionado por los desafíos y el trabajo en equipo, me destaco por mi enfoque orientado a resultados y mi constante búsqueda de aprendizaje en el dinámico mundo de la tecnología.</p>
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-4" data-aos="fade-right">
                        <img src=".\images\Me\TovsDev.png" className="img-fluid  shadow   bg-body-tertiary rounded " alt="a handsome developer" />
                    </div>
                    <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                        <h2>Informatics Engineer - Data and Web Solutions</h2>
                        <p className="font-italic">
                            Ingeniero en informática colombiano, apasionado por la tecnología, los datos y la resolución de problemas. Disfruto mantenerme activo con el deporte y los desafíos físicos. Amante de la lectura, el cine y la música de alta fidelidad. Viajar y conocer nuevas culturas es una de mis mayores fuentes de aprendizaje y crecimiento. Siempre en búsqueda de nuevos retos que impulsen mi desarrollo personal y profesional.
                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="icofont-rounded-right"></i> <strong>Nacimiento:</strong> 19 Nov 1998</li>
                                    <li><i className="icofont-rounded-right"></i> <strong>Telefono:</strong> +57 3005944681</li>
                                    <li><i className="icofont-rounded-right"></i> <strong>Ciudad:</strong> Bogotá, colombia</li>
                                    <li><i className="icofont-rounded-right"></i> <strong>Freelance: </strong> Disponible</li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="icofont-rounded-right"></i> <strong>Edad: </strong> {birthDay} {isMyBirthday() ? <HiOutlineCake /> : null}</li>
                                    <li><i className="icofont-rounded-right"></i> <strong>Titulo: </strong> Ingeniero en informática</li>
                                    <li><i className="icofont-rounded-right"></i> <strong>Correo: </strong>
                                        juandiegotovaria@hotmail.com</li>
                                </ul>
                            </div>
                        </div>
                        <p>
                            Experiencia dentro de equipos de diversas areas de conocimiento, tanto como lider, cómo tambien en el papel de subalterno, experiencia en solución de problemas en cortos tiempos ( Hackatones - Workshops ), comunicación verbal fluida ( Pitch ), recursivo en la solución de problematicas en entornos reales y/o simulados, manejo de ingles fluido y español nativo en constante mejora de mis habilidades tanto profesionales como personales
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
