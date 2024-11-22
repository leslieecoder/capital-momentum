import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Image from "next/image";
import financeImage1 from "@/assets/img/about/about__finance.png";

const Offer = ({ title, desc, label, img, offer, id }) => {
  return (
    <div
      className="about ext-about position-relative sp_bottom_140 sp_top_140"
      id={id}
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
                src={img ? img : financeImage1}
                alt="about__finance"
              />
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"
            data-aos="fade-up"
            data-aos-duration="2100"
          >
            <div className="about__inner about__inner--2">
              <div className="section__title section__title--2  sp_bottom_20">
                <div className="section__title__button">
                  <span className="text__gradient">
                    {label ? label : "Así funciona nuestro modelo:"}
                  </span>
                </div>
                <div className="section__title__heading">
                  <h3>
                    {title
                      ? title
                      : "Encuentra la libertad financiera en tu tiempo libre."}
                  </h3>
                </div>
              </div>
              <p className="sp_bottom_10">
                {desc
                  ? desc
                  : "Únete a nuestro equipo y promueve productos de alta rentabilidad en trading y bienes raíces. ¡Sin experiencia previa, solo ganas de alcanzar la libertad financiera!"}
              </p>
              <div className="about__list">
                <ul>
                  <li>
                    <i className="icofont-check"></i>Promueve productos financieros de riesgo con alta rentabilidad.
                  </li>
                  <li>
                    <i className="icofont-check"></i>Conéctate con las mejores empresas.
                  </li>
                  <li>
                    <i className="icofont-check"></i>Recibe capacitación de 0 a 100.
                    application
                  </li>
                  <li>
                    <i className="icofont-check"></i>Genera ingresos constantes
                  </li>
      
                </ul>
              </div>
              <div className="about__vision__wrapper">
                <div className="about__button">
                  <ButtonPrimary
                    text="APRENDE MAS DE NUESTRO MODELO"
                    path="/about"
                    button={"black"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
