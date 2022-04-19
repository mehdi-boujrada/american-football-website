import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            ************ <span className="purple">************ </span>
            ************ <span className="purple"> ************</span>
            <br />************
            <br />
            <br />
            ************
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> American Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Gym.
            </li>
            <li className="about-activity">
              <ImPointRight /> ************
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "************"{" "}
          </p>
          <footer className="blockquote-footer">Mehdi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
