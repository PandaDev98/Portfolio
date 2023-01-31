import { projects } from "../../../../../data/projects";
import { ProjectView } from "../../../elements/sections/portfolio/ProjectView";
import "./portfolio.css";


export const Portfolio = () => {
    return (
        <section id="portfolio" className="portfolio section-bg">
            <div className="container">

                <div className="section-title">
                    <h2>Portafolio</h2>
                </div>

                <div className="container">
                    <ProjectView projects={projects} />
                </div>
            </div>
        </section>

    )
}
