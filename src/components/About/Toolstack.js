import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVisualstudio,
  SiFigma
} from "react-icons/si";
import { FaAndroid } from "react-icons/fa"; // Android icon from Font Awesome


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <SiVisualstudiocode style={{ color: "#0078D4"}} /> {/* Change the color */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <FaAndroid style={{ color: "#3DDC84"}} /> {/* Android green color */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiVisualstudio style={{ color: "#5C2D91" }} /> {/* Visual Studio official purple */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiPostman style={{ color: "#FF6A00"}} /> {/* Android green color */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiFigma style={{ color: "#F24E1E" }} /> {/* Figma official color */}
      </Col>
    </Row>
  );
}

export default Toolstack;
