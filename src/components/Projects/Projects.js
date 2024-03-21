import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import emotion from "../../Assets/Projects/emotion.png";
import leaf from "../../Assets/Projects/leaf.png";
import lutecii from "../../Assets/Projects/lutecii.png";
import PortafolioA from "../../Assets/Projects/portafolioA.png";
import spotify from "../../Assets/Projects/spotify.png";
import suicide from "../../Assets/Projects/suicide.png";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
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
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
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
              ghLink="https://github.com/loth381/Spotify-clon"
              demoLink="https://spotify-clon-lyart-iota.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              vercel
              react
              tailwinds
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
