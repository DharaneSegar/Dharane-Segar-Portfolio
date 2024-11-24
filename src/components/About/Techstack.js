import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiNextdotjs,
  SiCsharp,
  SiPhp,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiBootstrap,
  SiKotlin,
  SiFlutter,
  SiDocker,
  SiSpringboot
} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiNodedotjs } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <FaReact style={{ color: "#61DAFB" }} /> {/* React logo color */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiNodedotjs style={{ color: "#339933" }} /> {/* Node.js official green */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiJava  style={{  color: "#f89820" }} /> {/* Java logo */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiSpringboot style={{  color: "#6DB33F" }} /> {/* Java logo */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiPython  style={{  color: "#3776AB" }} /> {/* Java logo */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiCsharp style={{ color: "#68217A"}} /> {/* Official C# purple */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiPhp style={{ color: "#777BB4" }} /> {/* Official PHP color */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiMongodb style={{ color: "#47A248",}} /> {/* MongoDB official green */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiGit style={{ color: "#F05032" }} /> {/* Git official red color */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiMysql style={{ color: "#4479A1" }} /> {/* MySQL official color */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiTailwindcss style={{ color: "#38BDF8" }} /> {/* Tailwind official color */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiBootstrap style={{ color: "#563D7C"}} /> {/* Bootstrap official purple color */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiKotlin style={{ color: "#7F52FF"}} /> {/* Kotlin official purple */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiFlutter style={{ color: "#02569B"}} /> {/* Flutter official blue */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiDocker style={{ color: "#2496ED", fontSize: "3rem" }} /> {/* Docker official blue */}
      </Col>
    </Row>
  );
}

export default Techstack;
