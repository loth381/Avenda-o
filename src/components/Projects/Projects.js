import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ecommerce from "../../Assets/Projects/ecommerce+.png";
import velada from "../../Assets/Projects/lavelada.png";
import lutecii from "../../Assets/Projects/lutecii.png";
import metaverso from "../../Assets/Projects/metaverso.png";
import pixolono from "../../Assets/Projects/pixolino.png";
import PortafolioA from "../../Assets/Projects/portafolioA.png";
import spotify from "../../Assets/Projects/spotify.png";
import sushi from "../../Assets/Projects/sushi.png";
import viajes from "../../Assets/Projects/viajes.png";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis trabajos <strong className="purple">Recientes </strong>
        </h1>
        <p style={{ color: "white" }}>
        Aquí hay algunos proyectos en los que he trabajado recientemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              css
              javascript
              supabase
              type
              vercel
              typescript
              nextjs
              react
              tailwinds
              imgPath={spotify}
              isBlog={false}
              title="Clone-Spotify"
              description="este fue un proyecto personal el cual yo queria crear un aplicativo fullstack el cual me guie para clonar el spotify o que se similar el cual tiene front como backed las tecnologias que utilice son nextjs,supabase como base datos, use varias librerias como motion, stripe, github, typescript,tailwind,,etc las funciones que tiene son suscribeciones, subir musicas, esta adaptada a cualquier ripo de pantalla "
              ghLink="https://github.com/loth381/Spotify-clon"
              demoLink="https://spotify-clon-lyart-iota.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              react
              css
              vercel
              titlePrimary="javascript,css,html"
              imgPath={PortafolioA}
              isBlog={false}
              title="Portafolio"
              description="este es mi proyecto de mi portafolio personal lo cual me guie de diferentes bootcamps y de diferentes desarrolladore ,el desarrollo de esta pagina web es mejorar como desarrollador web y poder dar a conocer a otras personas lo que se y puedo hacer como Profesional"
              ghLink="https://github.com/loth381/Avenda-o"
              demoLink="https://avenda-o-two.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              css
              javascript
              vercel
              imgPath={lutecii}
              isBlog={false}
              title="GRUPO LUTECCI"
              description="Pagina web del Grupo Lutecci es una pagina estatica la cual tiene la siguiente tecnologias html,css,javascript Ahora dejo dejo informacion de la empresa !GRUPO LUTECCI, Es un conglomerado de empresas exitosas que operan en diferentes mercados y con diferentes productos, están prestas a servirles con la cordialidad y calidez de nuestra gente.¡"
              ghLink="https://github.com/loth381/grupo-lutecci"
              demoLink="https://grupo-lutecci.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              html
              css
              vercel
              typescript
              astro
              tailwinds
              imgPath={velada}
              isBlog={false}
              title="La velada del año IV"
              description="Clon de la Pagina web de la velada El famoso evento de combates de boxeo entre streamers y celebridades que Ibai Llanos lleva organizando desde 2021. En estos años, este evento no ha parado de crecer y superar todos los récords de eventos por streaming, por lo que la expectación es máxima.  las tecnologias usadas en el projecto son html,css,js,typescript,verce,postgresql,taildwind,astro"
              ghLink="https://github.com/loth381/Velada-IV/tree/main?tab=readme-ov-file"
              demoLink="https://velada-iv.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              html
              css
              react
              javascript
              typescript  
              vercel
              mongo
              imgPath={ecommerce}
              isBlog={false}
              title="ecommerce"
              description="
              Pagina web  ecommerce esta pagina web se centra en la venta de productos de ropa lo cual es para ajilizar la venta de producto  y con la expacion de la marca. la pagina esta hecha de varias tecnologias las cuales son estas html,css,js,typescript,stripe,mongodb,vercel"
              ghLink="https://github.com/loth381"
              demoLink="https://loth0381-proyect-ecommers02.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
            html
            css
            javascript
            vercel
              imgPath={sushi}
              isBlog={false}
              title="Sushiman"
              description="pagina web estatica la cual fue desarrollada por JSMASTER un programadar estadounidense es cula me guio como desarrollar la pagina web animada"
              ghLink="https://github.com/loth381/SUSHIMAN "
              demoLink="https://sushi-six-sigma.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
            html
            css
            javascript
            vercel
              imgPath={pixolono}
              isBlog={false}
              title="Pixology"
              description="Pangina web estatica este es un projecto personal lo cual me guie de un programador estado unidense lo cual la pagina va relacionado a un pagina para una empresa de tecnologica lo cual es ofrecer sus servicios. Las tecnologias que use son html,css,js,vercel "
              ghLink="https://github.com/loth381/Pixology"
              demoLink="https://pixology-bay.vercel.app"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
            html
            css
            javascript
            vercel
              imgPath={metaverso}
              isBlog={false}
              title="Pixology"
              description="Pangina web estatica este es un projecto personal lo cual me guie de un programador estadounidense (JSMASTER) lo cual me ayudo a desarrollar este gran pagina web estatica. Las tecnologias que use son html,css,js,vercel "
              ghLink="https://github.com/loth381/metaverso"
              demoLink="https://metaverso-nu.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
            html
            css
            javascript
            vercel
              imgPath={viajes}
              isBlog={false}
              title="Viajes"
              description="Pangina web estatica este es un projecto personal lo cual me guie de un programador estadounidense (JSMASTER) lo cual me ayudo a desarrollar este gran pagina web estatica. Las tecnologias que use son html,css,js,vercel "
              ghLink="https://github.com/loth381/metaverso"
              demoLink="https://github.com/loth381/pagina-de-viajes"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
