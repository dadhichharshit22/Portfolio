import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import Event from "../../Assets/Projects/Screenshot 2025-03-29 232121.png"
import Hospital from "../../Assets/Projects/Screenshot 2025-03-29 232822.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Event}
              isBlog={false}
              title="AuraEvent- Event Management System"
              description="This is Event Management Website for the events like Tech Conference, Music, Online Event, etc. And you can create a event, get the event or get the event by id, update the event, delete the event , registration of event and cancelled a registration in this Web Application."
              ghLink="https://github.com/dadhichharshit22/AuraEvent.git"
              demoLink="https://auraevent.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Hospital}
              isBlog={false}
              title="Arogya Sandesh- Hospital Management System using QR Generator"
              description="Arogya Sandesh- Hospital Management System is an advanced healthcare solution integrated with an OR (Operation Room) Generator to streamline hospital operations. It efficiently manages patient records, appointments, billing, and surgical schedules, enhancing hospital workflow and patient care."
              ghLink="https://github.com/dadhichharshit22/Hospital-Management-.git"
              demoLink="https://prescripto-8ns6.onrender.com/"
            />
          </Col>

          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Shopping Cart"
              description="This is Shopping Website by using ReactJS and Redux-Toolkit"
              ghLink="https://github.com/dadhichharshit22/ShoppingCart.git"
              demoLink="https://shoppingcart-ten.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Top Courses Website"
              description="This is Top Courses Website in which we can see different course using filtering method of Javascript"
              ghLink="https://github.com/dadhichharshit22/Top-Courses.git"
              demoLink="https://top-courses.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Paste Application"
              description="Paste-Application is Notes Making Application in which we can used or stored the take for the daily and delete the text after completing the task"
              ghLink="https://github.com/dadhichharshit22/Paste-Application.git"
              demoLink="https://Paste-Application.vercel.app/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Password Generator Website"
              description="Password-Generator-Website for the generate the password for any website, app or other things which have weak password and strong password by using vanilla javascript, CSS(Cascading Style Sheet),HTML(Hyper Text Mark Up Language)"
              ghLink="https://github.com/dadhichharshit22/Password-Generator-website.git"
              demoLink="https://Password-Generator-website.vercel.app/"     
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
