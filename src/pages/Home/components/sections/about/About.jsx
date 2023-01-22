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
                    <p>Desarrollador web full-stack, DBA y analista de datos con un conjunto de habilidades versátiles y pasión por la tecnología. Experiencia en tecnologías como Angular, React, JavaScript, Power BI y SQL. Constantemente en busca de nuevos desafíos y oportunidades para mejorar tanto habilidades cómo el conocimientos en el campo del desarrollo de aplicativos. Apasionado por el trabajo en equipo y la colaboración, enfocado por automatizar y simplificar procesos en beneficio de la comunidad. Impulsado ​​por el amor por la tecnología y el deseo de tener un impacto positivo.</p>
                </div>

                <div className="row align-items-center">
                    <div className="col-lg-4" data-aos="fade-right">
                        <img src="src\assets\images\Me\TovsDev.png" className="img-fluid  shadow   bg-body-tertiary rounded " alt="a handsome developer" />
                    </div>
                    <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                        <h2>Fullstack web developer</h2>
                        <p className="font-italic">
                            Ingeniero en informatica colombiano, con amor por la lectura, el deporte, amante del viajar y conocer nuevas culturas, costumbres y tradiciones, apasionado por los largometrajes la musica HI-FI
                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="icofont-rounded-right"></i> <strong>Nacimiento:</strong> 19 Nov 1998</li>
                                    <li><i className="icofont-rounded-right"></i> <strong>Website:</strong> www.example.com</li>
                                    <li><i className="icofont-rounded-right"></i> <strong>Telefono:</strong> +57 3005944681</li>
                                    <li><i className="icofont-rounded-right"></i> <strong>Ciudad:</strong> Bogotá, colombia</li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="icofont-rounded-right"></i> <strong>Edad: </strong> {birthDay} {isMyBirthday() ? <HiOutlineCake /> : null}</li>
                                    <li><i className="icofont-rounded-right"></i> <strong>Titulo: </strong> Ingeniero en informática</li>
                                    <li><i className="icofont-rounded-right"></i> <strong>Correo: </strong>
                                        juandiegotovaria@hotmail.com</li>
                                    <li><i className="icofont-rounded-right"></i> <strong>Freelance: </strong> Disponible</li>
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
