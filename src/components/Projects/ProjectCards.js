import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { AiOutlineHtml5 } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { FaJava, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiVercel } from "react-icons/si";

function ProjectCards(props) {
  return (
    //Tecnologias
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <div style={{ display: "flex" }}>
          <div variant="primary" href={props.html} target="_blank">
            <AiOutlineHtml5 /> &nbsp;
            {props.isBlog}
          </div>
          {"\n"}
          {"\n"}

          {!props.isBlog && props.tailwinds && (
            <div
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <SiTailwindcss /> &nbsp;
            </div>
          )}

          {!props.isBlog && props.react && (
            <div
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >       
              <FaReact /> &nbsp;
            </div>
          )}



          {!props.isBlog && props.nextjs && (
            <div
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <SiNextdotjs /> &nbsp;
            </div>
          )}

            {!props.isBlog && props.java && (
            <div
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <FaJava /> &nbsp;
            </div>
          )}

          
            {!props.isBlog && props.vercel && (
            <div
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <SiVercel /> &nbsp;
            </div>
          )}
        </div>

        


        <Card.Title
          style={{ fontSize: "14px", color: "#659AD2", display: "flex" }}
        >
          {props.titlePrimary}
        </Card.Title>






        {/* github - demo   */}
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
