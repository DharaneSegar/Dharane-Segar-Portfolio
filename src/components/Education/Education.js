import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import EducationCard from "./EducationCard";
// import Particle from "../Particle";

function Education() {
  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Education </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few of my educational achievements.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* First Card - Degree */}
          <Col md={4} className="project-card">
            <EducationCard
              period="2021 - 2025"
              title="Sri Lanka Institute of Information Technology (SLIIT)"
              description={
                <>
                  BSc (Hons) in Information Technology Specializing in Software
                  Engineering — First Class Honours.
                  <br />
                  CGPA: 3.85 / 4.0
                  <br />
                  • Gold Medal for Academic Excellence
                  <br />• Best Performance Award in Software Engineering
                </>
              }
            />
          </Col>

          {/* Second Card - Advanced Level (GCE A/L) */}
          <Col md={4} className="project-card">
            <EducationCard
              period="2018-2020"
              title="Hindu Ladies’ College, Colombo"
              description="Followed the Physical Science stream in GCE Advanced Level and achieved the following results: Combined Mathematics (A), ICT (B), Physics (C), and General English (A)."
            />
          </Col>

          {/* Third Card - Ordinary Level (GCE O/L) */}
          <Col md={4} className="project-card">
            <EducationCard
              period="2016-2017"
              title="Hindu Ladies’ College, Colombo"
              description="Achieved 9 A's for all subjects in GCE Ordinary Level."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Education;
