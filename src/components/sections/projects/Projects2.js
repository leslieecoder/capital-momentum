import Image from "next/image";
import projectSmallImage1 from "@/assets/img/project/project__small__img.png";
import projectSmallImage2 from "@/assets/img/project/project__small__img__1.png";
import projectSmallImage3 from "@/assets/img/project/project__small__img__2.png";
import getAllProjects from "@/libs/getAllProjects";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import ProjectCard2 from "@/components/shared/cards/ProjectCard2";
import Link from "next/link";

const Projects2 = ({ project }) => {
  const projects = getAllProjects().slice(3, 6);
  return (
    <div
      className={`project  special__spacing ${
        project === 2
          ? "sp_bottom_80"
          : project === 3
          ? "sp_bottom_80"
          : "sp_bottom_100"
      }`}
      id="project__area"
    >
      <div className="project__margin">
        <div className="container sp_top_100">
          <div
            className="row align-items-center"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="col-xl-4 col-lg-3 col-md-6 col-sm-12">
              <div className="section__title section__title--2  sp_bottom_30">
                <div className="section__title__button">
                  <span className="text__gradient">¿Qué productos puedes promover?
                  </span>
                </div>
                <div className="section__title__heading">
                  <h3>NUESTROS PROYECTOS</h3>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-6 col-sm-12">
              <div className="project__bottom__img text-center">
                <Image src={projectSmallImage3} alt="" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6  col-sm-12">
              <div className="project__bottom__text">
                <p>
                Descubre las oportunidades que transformarán tus ingresos:
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`container  sp_top_30 ${
            project === 3 ? "sp_bottom_40 " : "sp_bottom_60 "
          }`}
        >
          <div className="row">
            {projects?.map((project, idx) => (
              <ProjectCard2 key={idx} project={project} />
            ))}
          </div>
          <div
            className="col-xl-12"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="project__bottom__button sp_top_30 text-center">
              <ButtonPrimary
                text="APRENDE MAS DE NUESTROS PROYECTOS"
                path="/projects"
                button={"black"}
              />
            </div>
          </div>
          <div className="project__small__img">
            <Image
              className="project__img__1"
              src={projectSmallImage1}
              alt=""
            />
            <Image
              className="project__img__2"
              src={projectSmallImage2}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects2;
