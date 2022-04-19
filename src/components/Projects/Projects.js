import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import hamza from "../../Assets/Projects/hamza.PNG";
import nizar from "../../Assets/Projects/nizar.PNG";
import mehdi from "../../Assets/Projects/mehdi.PNG";
import ziad from "../../Assets/Projects/ziad.PNG";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Our Team <strong className="purple">members </strong>
        </h1>
        <p style={{ color: "white" }}>
          ATLAS LIONS PLAYERS
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nizar}
              isBlog={false}
              title="DIFFENSIVE COACH AND MIDDLE LINE BACKER"
              // description="Wegent for the Wumpus game in this project. Before advancing to its room, the agent must kill the Wumpus in its matching room and find the concealed gold."
              link="https://www.instagram.com/_madniz_/"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hamza}
              isBlog={false}
              title="OFFINSIVE COACH AND TIGHTEND"
              // description="MIJO M9AWEEED"
              link="https://www.instagram.com/hamza.el.hamdaoui/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mehdi}
              isBlog={false}
              title="SECRETARY AND WIDE RECEVER"
              // description="Wegent for the Wumpus game in this project. Before advancing to its room, the agent must kill the Wumpus in its matching room and find the concealed gold."
              link="https://www.instagram.com/itsmehdi.10/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ziad}
              isBlog={false}
              title="VICE-PRESIDENT AND WIDE RECEVER"
              // description="Wegent for the Wumpus game in this project. Before advancing to its room, the agent must kill the Wumpus in its matching room and find the concealed gold."
              link="https://www.instagram.com/zyadssh/?hl=fr"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
