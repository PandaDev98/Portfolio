import "./projectView.css"
export const ProjectView = ({ projects }) => (
    <>
        {projects.map(({ images, name,description,techs }, key) => (
            <div className="col-12 portfolio-container" key={key}>
                <h1>{name}</h1>
                <div className="projectDesc">
                    <p>{description}</p>
                </div>
                <div className="projectTech">
                    <p>{techs}</p>
                </div>
                <div className="imgCarousel">
                    {images.map((image, i) => <img className="img-fluid rounded" key={i} src={image} alt="" />)}
                </div>
            </div>
        ))}
    </>
)




