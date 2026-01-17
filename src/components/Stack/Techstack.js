import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJava, DiPython, DiGit
} from "react-icons/di";
import {
  SiJavascript, SiTypescript, SiCsharp, SiKotlin,
  SiReact, SiNextdotjs, SiTailwindcss, SiBootstrap,
  SiNodedotjs, SiExpress, SiSpringboot,
  SiFlutter,
  SiMongodb, SiMysql, SiPostgresql,
  SiGraphql,
  SiGitlab, SiJira
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      {/* Languages */}
      <Col xs={4} md={2} className="tech-icons"><SiJavascript color="#F7DF1E" /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiTypescript color="#3178C6" /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiPython color="#3776AB" /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiJava color="#ED8B00" /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiCsharp color="#239120" /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiKotlin color="#7F52FF" /></Col>

      {/* Frontend */}
      <Col xs={4} md={2} className="tech-icons"><SiReact color="#61DAFB" /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiNextdotjs color="#FFFFFF" /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiTailwindcss color="#06B6D4" /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiBootstrap color="#7952B3" /></Col>

      {/* Backend */}
      <Col xs={4} md={2} className="tech-icons"><SiNodedotjs color="#339933" /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiExpress color="#FFFFFF" /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiSpringboot color="#6DB33F" /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiGraphql color="#E10098" /></Col>

      {/* Mobile */}
      <Col xs={4} md={2} className="tech-icons"><SiFlutter color="#02569B" /></Col>

      {/* Databases */}
      <Col xs={4} md={2} className="tech-icons"><SiMongodb color="#47A248" /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiMysql color="#4479A1" /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiPostgresql color="#336791" /></Col>

      {/* DevOps / Tools */}
      <Col xs={4} md={2} className="tech-icons"><SiGitlab color="#FC6D26" /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiJira color="#0052CC" /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiGit color="#F05032" /></Col>

    </Row>
  );
}

export default Techstack;
