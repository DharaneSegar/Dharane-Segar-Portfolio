import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
// import Particle from "../Particle";
import NASA from "../../Assets/Projects/NASA.png";
import FarmConnect from "../../Assets/Projects/FarmConnect.jpg";
import TimeTable from "../../Assets/Projects/TimeTable.png";
import iCorner from "../../Assets/Projects/iCorner.avif";
import SolarFlare from "../../Assets/Projects/SolarFlare.webp";
import LearnHub from "../../Assets/Projects/LearnHub.webp";
import BuildZone from "../../Assets/Projects/BuildZone.png";
import LuxuryX from "../../Assets/Projects/LuxuryX.webp";
import Medpro from "../../Assets/Projects/MedPro.webp";
import BioMentor from "../../Assets/Projects/BioMentor.jpg";
import Chatbot from "../../Assets/Projects/Chatbot.jpg";
import Cloud from "../../Assets/Projects/Cloud.jpg";
import NatureAR from "../../Assets/Projects/NatureAR.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}

      <h1 className="project-heading">
        My Recent <strong className="purple">Works </strong>
      </h1>
      <p style={{ color: "white" }}>
        Here are a few projects I've worked on recently.
      </p>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={BioMentor}
            isBlog={false}
            title="BioMentor - Intelligent Summarization Tool for A/L Biology"
            description="Developed the summarization component of BioMentor, a personalized e-learning platform for A/L Biology, using a fine-tuned Flan-T5 model with voice output and multilingual note generation. Implemented RAG for context-aware summaries and chose monolithic architecture for improved performance and simplicity."
            ghLink="https://github.com/DharaneSegar/BioMentor-Summarization-Module"
          />
        </Col>

        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={Chatbot}
            isBlog={false}
            title="CTSE Module Lecture Chat Bot using Gemini RAG Architecture"
            description="Developed an AI-powered chatbot that answers student queries based on CTSE lecture materials using Retrieval-Augmented Generation (RAG). Leveraged FAISS for semantic search and Google's Gemini 2.0 Flash for grounded, context-aware response generation. Built in Google Colab with Python, this academic assistant ensures accuracy, transparency, and curriculum alignment."
            ghLink="https://github.com/DharaneSegar/CTSE-Lecture-Chat-Bot"
          />
        </Col>

        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={NatureAR}
            isBlog={false}
            title="Marker-Based Nature AR Experience with A-Frame & AR.js"
            description="Contributed to a WebAR group project themed on nature using A-Frame and AR.js. Developed an interactive scene simulating the formation of a rainbow during a light drizzle, triggered by a printed flower marker. The scene includes animated 3D models, ambient sounds, custom drizzle effects, and a realistic light setup. Highlights include spatial sound control, bee flight animations, and synchronized character movement, all enhancing user immersion in a natural storytelling experience."
            ghLink="https://github.com/DharaneSegar/Nature-AR-Experience" // replace with actual repo if available
            demoLink="https://mysliit-my.sharepoint.com/:f:/g/personal/it21264634_my_sliit_lk/Eg_EjAMg3FhItRjTVw5gLncBc4MY9dk4VSxgoIF_C0_rxw?e=bn6yWA"
          />
        </Col>

        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={Cloud}
            isBlog={false}
            title="Secure Cloud Deployment of a Node.js Microservice using Azure and Docker"
            description="Developed and deployed a cloud-native User Authentication Microservice using Node.js, Express, and MongoDB Atlas. The service was containerized with Docker, deployed on Azure App Service, and automated with GitHub Actions for CI/CD. Security was prioritized through JWT auth, environment variables, HTTPS enforcement, and vulnerability scanning via Snyk."
            ghLink="https://github.com/DharaneSegar/Secure-Cloud-Deployment-of-a-Node.js-Microservice-using-Azure-and-Docker"
          />
        </Col>

        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={iCorner}
            isBlog={false}
            title="iCorner - e-Commerce Web and Mobile Application"
            description="This project involved the design and development of a comprehensive e-commerce platform using client-server architecture. The system featured a React-based web application for back-office operations and a native Android application for customer interaction, integrated through a centralized C# Web API web service hosted on IIS. The backend employed a NoSQL database (MongoDB)for robust and scalable data management."
            ghLink="https://github.com/DharaneSegar/iCorner"
          />
        </Col>

        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={LearnHub}
            isBlog={false}
            title="LearnHub - e-Learning Platform"
            description="This project is a web application built with a robust Express.js backend and a modern Vite React + Tailwind CSS frontend. It employs MongoDB for data storage and uses Docker Compose to manage containerized services, ensuring seamless deployment and scalability. The platform provides an end-to-end solution for course management with integrated payment processing and real-time SMS messaging features."
            ghLink="https://github.com/DharaneSegar/Educational-Platform-for-Online-Learning"
          />
        </Col>

        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={TimeTable}
            isBlog={false}
            title="University Timetable Management System"
            description="This project is a RESTful API backend system designed for managing a University Timetable Management System. Built using Node.js, Express.js, and MongoDB, the API offers robust functionality for handling key operations like course scheduling, room bookings, student enrollments, and automated notifications. The system is crafted with a focus on scalability, security, and ease of integration."
            ghLink="https://github.com/DharaneSegar/University-Timetable-Management-System"
          />
        </Col>

        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={NASA}
            isBlog={false}
            title="Astronomy Explorer Web Application"
            description="React-based platform that showcases space data from NASA’s public APIs, such as Mars Rover Photos and Astronomy Picture of the Day. Styled with Tailwind CSS and powered by a Node.js backend for user management, it offers a responsive, interactive interface where users can explore and save favorites. Deployed on Vercel, this project highlights skills in API integration, full-stack development, and engaging design."
            ghLink="https://github.com/DharaneSegar/React-Frontend-Application-Using-NASA-APIs"
          />
        </Col>

        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={SolarFlare}
            isBlog={false}
            title="Solar Flare - Web Application for an Optical Store"
            description="A web-based platform designed for an optical store, enabling users to virtually try on glasses using their device’s camera. Users can browse a variety of styles and instantly visualize how each pair suits them, offering a personalized and interactive shopping experience. This application combines convenience and advanced technology to enhance customer engagement and satisfaction."
            ghLink="https://github.com/DharaneSegar/Solar-Flare"
          />
        </Col>

        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={FarmConnect}
            isBlog={false}
            title="Farm Connect - Mobile Application for Farmers and Customers"
            description="A mobile application designed to directly connect farmers with customers, promoting transparency and fair pricing while reducing middlemen commissions. Built using Flutter-Dart for the mobile frontend and Node.js with MongoDB for the backend, this app ensures fresh, high-quality products for customers and better compensation for farmers. It streamlines the supply chain, empowering both farmers and consumers with a seamless, efficient shopping experience."
            ghLink="https://github.com/DharaneSegar/Farm-Connect"
          />
        </Col>

        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={BuildZone}
            isBlog={false}
            title="Build Zone - Web and Mobile Applications for the Construction Industry"
            description="This project includes a web application built with the MERN stack for administrators and procurement staff, and a mobile app developed with Flutter-Dart for site managers. The platform simplifies the management of purchase orders, improving data handling and communication between the admin and site teams, streamlining procurement and accounting processes for greater operational efficiency."
            ghLink="https://github.com/DharaneSegar/Build-Zone"
          />
        </Col>

        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={LuxuryX}
            isBlog={false}
            title="LuxuryX - e-Commerce Website and Web Application"
            description="This project is an e-commerce platform built using the MERN stack, featuring a comprehensive system for managing employees, suppliers, products, customers, orders, deliveries, promotions, and finances. The platform includes both a website and a web application, providing robust tools for efficient management of all aspects of the e-commerce business. From handling customer orders to managing supplier relationships and tracking finances, the system streamlines operations and ensures smooth, scalable business processes."
            ghLink="https://github.com/DharaneSegar/LuxuryX"
          />
        </Col>

        <Col md={4} className="project-card">
          <ProjectCard
            imgPath={Medpro}
            isBlog={false}
            title="MedPro - Healthcare Mobile Application"
            description="This Android application, built using Kotlin in Android Studio and powered by an SQLite database, allows users to easily book doctor appointments, schedule lab tests, and purchase medicines directly from their mobile devices. The app helps users navigate the current economic challenges by offering a streamlined, single-platform solution for managing healthcare services. With features like user registration and login, it provides convenient access to essential medical services and products, enhancing accessibility and efficiency in healthcare."
            ghLink="https://github.com/DharaneSegar/MedPro"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
