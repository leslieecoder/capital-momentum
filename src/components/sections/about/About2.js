import aboutImage2 from "@/assets/img/about/about__2.png";
import aboutSmallImage2 from "@/assets/img/about/about__small__img__2.png";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Image from "next/image";
import Link from "next/link";

const About2 = ({ id }) => {
  return (
    <div
      className="about position-relative sp_bottom_140 sp_top_140"
      id={id ? id : "about__mission__area"}
    >
      <div className="container">
        <div className="row">
          <div
            className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"
            data-aos="fade-up"
            data-aos-duration="1800"
          >
            <div
              className="about__img__wrapper about__img__wrapper--2 position-relative"
              data-tilt
            >
              <Image
                className="about__img__1"
                src={aboutImage2}
                alt=""
                placeholder="blur"
              />
              <div className="about__big__title">
                <h1>Nosotros</h1>
              </div>

              <div className="section__strock__line__animation">
                <Image
                  className="ssla__animation ssl__img__3"
                  src={aboutSmallImage2}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"
            data-aos="fade-up"
            data-aos-duration="2100"
          >
            <div className="about__inner about__inner--2">
              <div className="section__title section__title--2  sp_bottom_30">
                <div className="section__title__button">
                  <span className="text__gradient">¿Quiénes Somos?</span>
                </div>
                <div className="section__title__heading">
                  <h3>
                  El Impulso Que Necesitas para Avanzar
                  </h3>
                  
                </div>
              </div>

              <div className="about__vision__wrapper">
                <div className="about__number">
                  <div className="about__number__inner">
                    <span >10</span>
                    <p>Años de experiencia</p>
                    <div className="about__number__icon">
                      <Link href="/about">
                        {" "}
                        <svg
                          width="34"
                          height="34"
                          viewBox="0 0 34 34"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.4258 10.9897L23.0101 10.9897L23.0101 19.574"
                            stroke="#0A0624"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M10.9902 23.0107L22.8908 11.1101"
                            stroke="#0A0624"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="about__text__wrapper">
                  <div className="about__misson">
                    <h6> Nuestra Mision </h6>
                  </div>
                  <div className="about__text__2">
                    <p>
                    En Capital Momentum, conectamos a emprendedores visionarios con productos financieros y de inversión de alto rendimiento. Nos especializamos en:
                    </p>
                  </div>
                  <div className="about__button">
                    <ButtonPrimary
                      text="Aprende Mas"
                      path="/about"
                      button="black"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About2;
