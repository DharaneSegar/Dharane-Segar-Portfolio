import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "center" }}>
            Hi Everyone, I am <span className="purple">Dharane Segar </span>
            from <span className="purple">Colombo, Sri Lanka.</span>
            <br />
            <br />
            I am a passionate and hardworking final-year Software Engineering undergraduate at the Sri Lanka Institute of Information Technology (SLIIT). My academic journey has been centered on mastering software development and engineering principles, with a focus on creating impactful solutions.
            <br />
            <br />
            From August 2023 to January 2024, I worked as a Software Engineer Intern at <span className="purple">WSO2</span>, where I gained hands-on experience in building and deploying reusable domain-specific demos for industries like Banking and Airlines. During my internship, I was responsible for designing and implementing integration solutions using WSO2 products.            <br />
            <br />
            I specialize in <span className="purple">full-stack development</span>, <span className="purple">mobile app development</span>, and <span className="purple">cloud technologies</span>. I am proficient in a variety of programming languages and frameworks, including the <span className="purple">MERN stack</span>, <span className="purple">Java</span>, <span className="purple">C#</span>, <span className="purple">Flutter</span>, <span className="purple">Kotlin</span>, <span className="purple">Python</span>, and <span className="purple">DBMS</span>. I am dedicated to leveraging these technologies to build innovative, user-friendly applications.
            <br />
            <br />
            With a strong commitment to continuous learning and problem-solving, I aspire to create impactful solutions that address real-world needs and make a meaningful difference.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
