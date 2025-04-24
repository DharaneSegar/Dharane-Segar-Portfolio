import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiVisualstudio,
  SiFigma,
  SiPostman,
  SiGithub,
  SiDocker,
  SiKubernetes,
  SiVercel,
  SiMicrosoftazure,
  SiAndroidstudio,
  SiGooglecolab,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Editors & Design */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode color="#007ACC" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudio color="#5C2D91" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma color="#F24E1E" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAndroidstudio color="#3DDC84" />
      </Col>

      {/* API & Testing */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman color="#FF6C37" />
      </Col>

      {/* DevOps & Version Control */}
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub color="#FFFFFF" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker color="#2496ED" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKubernetes color="#326CE5" />
      </Col>

      {/* Deployment */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel color="#FFFFFF" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftazure color="#0089D6" />
      </Col>

      {/* AI/ML */}
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecolab color="#F9AB00" />
      </Col>
    </Row>
  );
}

export default Toolstack;
