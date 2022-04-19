import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Eventcard from "./Eventcard";
import Particle from "../Particle";
import lionsuir from "../../Assets/Projects/lions-uir.PNG";
import lionsjaguars from "../../Assets/Projects/lions-jaguars.PNG";
import lionsmavrecs from "../../Assets/Projects/lions-mavrecs.PNG";


function Event() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Our Team <strong className="purple">Events </strong>
        </h1>
        <p style={{ color: "white" }}>
          ATLAS LIONS PLAYERS
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={6} className="project-card">
            <Eventcard
              imgPath={lionsmavrecs}
              isBlog={false}
              title="CAMP WITH THE MAVRECS"
              // description="Wegent for the Wumpus game in this project. Before advancing to its room, the agent must kill the Wumpus in its matching room and find the concealed gold."
              link="https://www.instagram.com/p/CbKZafgqkno/"
            />
          </Col>
          
          <Col md={6} className="project-card">
            <Eventcard
              imgPath={lionsuir}
              isBlog={false}
              title="CAMP AT UIR UNI"
              // description="MIJO M9AWEEED"
              link="https://www.instagram.com/p/CbTWZEVqkfv/"
            />
          </Col>


          <Col md={6} className="project-card">
            <Eventcard
              imgPath={lionsjaguars}
              isBlog={false}
              title="FIRST MATCH FOR THE LIONS"
              // description="MIJO M9AWEEED"
              link="https://www.instagram.com/p/Cb6E1hpKUDj/"
            />
          </Col>
      
        </Row>
      </Container>
    </Container>
  );
}

export default Event;
