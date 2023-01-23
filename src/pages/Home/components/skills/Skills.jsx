import "./skills.css";
import Slider from "react-slick";

export const Skills = () => {
    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        rows: 2,
    };
    return (
        <section id="skills" className="skills section-bg">
            <div className="container">

                <div className="section-title">
                    <h2>Skills</h2>
                </div>

                <div className="row skills-content">
                    <Slider {...settings}>
                        <div style={{ width: 50 }}>
                            <img className="" src="src\assets\images\skills\Angular.png" alt="" 
                            />
                        </div>
                        <div>
                            <img className="img-fluid " src="src\assets\images\skills\Bootstrap.png" alt="" />
                        </div>
                        <div>
                            <img className="img-fluid " src="src\assets\images\skills\CSS3.png" alt="" />
                        </div>
                        <div>
                            <img className="img-fluid " src="src\assets\images\skills\Git.png" alt="" />
                        </div>
                        <div>
                            <img className="img-fluid " src="src\assets\images\skills\GitHub.png" alt="" />
                        </div>
                        <div>
                            <img className="img-fluid " src="src\assets\images\skills\Html5.png" alt="" />
                        </div>
                        <div>
                            <img className="img-fluid " src="src\assets\images\skills\JS.png" alt="" />
                        </div>
                        <div>
                            <img className="img-fluid " src="src\assets\images\skills\Node.png" alt="" />
                        </div>
                        <div>
                            <img className="img-fluid " src="src\assets\images\skills\PowerBi.png" alt="" />
                        </div>
                        <div>
                            <img className="img-fluid " src="src\assets\images\skills\React.png" alt="" />
                        </div>
                        <div>
                            <img className="img-fluid " src="src\assets\images\skills\SASS.png" alt="" />
                        </div>
                        <div style={{width:'102%'}}>
                            <img className="img-fluid mt-3" src="src\assets\images\skills\Snowflake.png" alt="" />
                        </div>
                    </Slider>
                </div>

            </div>
        </section >

    )
}
