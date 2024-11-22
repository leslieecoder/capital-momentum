import blogBg2 from "@/assets/img/blog/blog__bg_2.png";
import Link from "next/link";

const Skills = ({ type, title }) => {
  return (
    <div
      className="skillarea sp_bottom_110 sp_top_140"
      style={{ background: `url('${blogBg2.src}')` }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-xl-7 col-lg-6 col-md-12 col-sm-12 col-12"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="section__title  section__title--2 blog__4__padding__right section__title--3">
              <div className="section__title__button">
                <span>¿Es para ti?</span>
              </div>
              <div className="section__title__heading sp_bottom_20">
                <h3>¿Buscas una oportunidad que se adapte a tu tiempo y te permita generar ingresos adicionales de manera flexible?</h3>
              </div>
              <div className="blog__4__section__title__text">
                <p>
                Nuestro cuestionario te ayudará a descubrir si este es el tipo de trabajo que necesitas para alcanzar tus objetivos financieros y personales.
                </p>
              </div>
              <div className="section__title__button">
                <Link className="default__button" href="/blogs">
                Haz clic aquí para comenzar tu camino
                </Link>
              </div>
            </div>
          </div>
          <div
            className="col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12"
            data-aos="fade-up"
            data-aos-duration="1800"
          >
            {/* <div className="skill__sets">
              <h3>
                {title
                  ? title
                  : "We’ll Ensure You Always Get the Best Guidance."}
              </h3>

              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
                voluptatibus.
              </p>

              <div className="single-progress">
                <h6 className="title">
                  {type === 2 ? "Hiring" : type === 3 ? "HTML" : "Consulting"}
                </h6>
                <div className="progress">
                  <div
                    className="progress-bar progress__gradient"
                    role="progressbar"
                    style={{
                      width: "90%",
                      visibility: "visible",
                      animationDuration: "0.5s",
                      animationDelay: "0.3s",
                      animationName: "fadeInLeft",
                    }}
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                  <span className="progress-number">90%</span>
                </div>
              </div>

              <div className="single-progress">
                <h6 className="title">
                  {type === 2
                    ? "Onboarding"
                    : type === 3
                    ? "CSS"
                    : "Investment"}
                </h6>
                <div className="progress">
                  <div
                    className="progress-bar progress__gradient"
                    role="progressbar"
                    style={{
                      width: "75%",
                      visibility: "visible",
                      animationDuration: "0.5s",
                      animationDelay: "0.3s",
                      animationName: "fadeInLeft",
                    }}
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                  <span className="progress-number">75%</span>
                </div>
              </div>

              <div className="single-progress">
                <h6 className="title">
                  {type === 2
                    ? "Culture"
                    : type === 3
                    ? "Javascript"
                    : "Business"}
                </h6>
                <div className="progress">
                  <div
                    className="progress-bar progress__gradient"
                    role="progressbar"
                    style={{
                      width: "95%",
                      visibility: "visible",
                      animationDuration: "0.5s",
                      animationDelay: "0.3s",
                      animationName: "fadeInLeft",
                    }}
                    aria-valuenow="95"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                  <span className="progress-number">95%</span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
