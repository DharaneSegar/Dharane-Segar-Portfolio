import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "center" }}>
            Hi Everyone, I am <span className="purple">Dharane Segar</span> from{" "}
            <span className="purple">Colombo, Sri Lanka.</span>
            <br />
            <br />I am a passionate and hardworking final-year Software
            Engineering undergraduate at the Sri Lanka Institute of Information
            Technology (SLIIT), pursuing a{" "}
            <span className="purple">
              BSc (Hons) in Information Technology specializing in Software
              Engineering
            </span>{" "}
            with <span className="purple">First Class Honours</span>.
            <br />
            <br />I have been recognized with several academic achievements,
            including:
            <ul className="purple" style={{ textAlign: "center"}}>
              <li>Gold Medal for Academic Excellence</li>
              <li>Best Performance Award in Software Engineering</li>
              <li>
                Multiple Dean’s List Awards for outstanding academic performance
              </li>
            </ul>
            <br />
            From August 2023 to January 2024, I worked as a{" "}
            <span className="purple">Software Engineer Intern</span> at{" "}
            <span className="purple">WSO2</span>, where I contributed to backend
            service development and API exposure using WSO2 Integration tools. I
            also built reusable domain-specific demo solutions for industries
            such as Banking and Airlines, and containerized them with Docker for
            deployment.
            <br />
            <br />
            My technical expertise spans{" "}
            <span className="purple">full-stack development</span>,{" "}
            <span className="purple">mobile app development</span>,{" "}
            <span className="purple">cloud technologies</span>, and{" "}
            <span className="purple">machine learning</span>. I am proficient in
            a variety of programming languages and frameworks, including the{" "}
            <span className="purple">MERN stack</span>,{" "}
            <span className="purple">Java</span>,{" "}
            <span className="purple">Spring Boot</span>,{" "}
            <span className="purple">C#</span>,{" "}
            <span className="purple">Flutter</span>,{" "}
            <span className="purple">Kotlin</span>,{" "}
            <span className="purple">Python</span>, and{" "}
            <span className="purple">DBMS</span> technologies.
            <br />
            <br />
            Beyond academics, I have also completed several{" "}
            <span className="purple">freelance and research projects</span>,
            gaining hands-on experience in designing scalable architectures,
            deploying cloud-based solutions, and solving real-world problems
            with innovation and creativity.
            <br />
            <br />
            With a strong commitment to continuous learning, teamwork, and
            impactful problem-solving, I strive to build solutions that make a
            meaningful difference in the real world.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
