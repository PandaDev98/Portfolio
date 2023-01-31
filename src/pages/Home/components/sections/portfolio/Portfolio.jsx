import { projects } from "../../../../../data/projects";
import { ProjectView } from "../../../elements/sections/portfolio/ProjectView";
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

                    <ProjectView projects={projects}/>


                </div>

            </div>
        </section>

    )
}
