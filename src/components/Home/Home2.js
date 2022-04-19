import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/homelogo.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillInstagram,
} from "react-icons/ai";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> OUR TEAM
            </h1>
            <p className="home-about-body">
            ************
            ************
              <br />
              <br />************:
              <i>
                <b className="purple">************ </b>
              </i>
              <br />
              <br />
              ************ &nbsp;
              <i>
                <b className="purple">************ </b> and
                ************{" "}
                <b className="purple">
                ************
                </b>
              </i>
              <br />
              <br />
              ************
              with <b className="purple">************</b> and
              <i>
                <b className="purple">
                  {" "}
                  ************
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> ************</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND US ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with us
            </p>
            <ul className="home-about-social-links">
        
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/atlas_lions_americanfootball/?hl=fr"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
