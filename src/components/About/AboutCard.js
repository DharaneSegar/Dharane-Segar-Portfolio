import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "center" }}>
            Hi, I’m <span className="purple">Dharane Segar</span>, a{" "}
            <span className="purple">Software Engineer</span> based in{" "}
            <span className="purple">Colombo, Sri Lanka</span>.
            <br />
            <br />
            I hold a{" "}
            <span className="purple">
              BSc (Hons) in Information Technology (Software Engineering)
            </span>{" "}
            from the Sri Lanka Institute of Information Technology (SLIIT) with{" "}
            <span className="purple">First Class Honors</span>. My academic
            performance has been recognized through several achievements,
            including:
            <ul
              className="purple"
              style={{
                listStyle: "none",
                display: "inline-block",
                textAlign: "center",
                padding: 0,
              }}
            >
              <li>🏅 Gold Medal for Academic Excellence</li>
              <li>💻 Best Performance Award in Software Engineering</li>
              <li>
                📜 Multiple Dean’s List Awards for outstanding academic
                performance
              </li>
            </ul>
            <br />
            <br />
            I am currently working at{" "}
            <span className="purple">GTN Tech</span> as a{" "}
            <span className="purple">Software Engineer</span>, contributing as a
            full-stack developer to the{" "}
            <span className="purple">GTN Axis Admin Terminal</span>. This
            enterprise-grade application is a core component of the{" "}
            <span className="purple">GTN Trade</span> platform, designed to manage
            users, customers, and institutions while providing administrators
            with comprehensive control over the platform’s ecosystem.
            <br />
            <br />
            Previously, I worked as a{" "}
            <span className="purple">Software Engineer Intern</span> at{" "}
            <span className="purple">WSO2</span>, where I contributed to backend
            service development and API exposure, built reusable domain-specific
            demo solutions for industries such as banking and airlines, and
            containerized applications using Docker.
            <br />
            <br />
            My technical experience spans{" "}
            <span className="purple">full-stack development</span>,{" "}
            <span className="purple">backend systems</span>,{" "}
            <span className="purple">cloud-based solutions</span>, and{" "}
            <span className="purple">applied artificial intelligence</span>. I
            enjoy working with technologies such as{" "}
            <span className="purple">Java</span>,{" "}
            <span className="purple">Spring Boot</span>,{" "}
            <span className="purple">React</span>,{" "}
            <span className="purple">GraphQL</span>,{" "}
            <span className="purple">Python</span>, and modern database systems.
            <br />
            <br />
            Alongside professional work, I have completed several{" "}
            <span className="purple">academic, research, and personal projects</span>,
            gaining hands-on experience in designing scalable architectures,
            implementing data-driven solutions, and solving real-world problems.
            <br />
            <br />
            I am driven by continuous learning, teamwork, and thoughtful
            problem-solving, with a strong interest in building reliable and
            impactful software solutions.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
