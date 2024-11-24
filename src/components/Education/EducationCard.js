import React from "react";
import Card from "react-bootstrap/Card";


function EducationCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title>{props.period}</Card.Title>
        <Card.Title className="purple">{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        
       
      </Card.Body>
    </Card>
  );
}
export default EducationCard;
