import React from "react";
import "./about.css";
const About = () => {
  return (
    <div className="about d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="d-flex">
          <h1>About Us</h1>
        </div>

        <p>
          My name is Darshan Patel and I’m pursuing my B. Tech in ICT from PDEU Collage. I have developed my skilled in Frontend and Backend Technologies like HTML, CSS, Java Script, ReactJs and NodeJs along with its Framework as well. I have a solid understanding of problem-solving techniques, which I’ve applied in various projects.Last summer, I interned at Cloud Ladder Consulting as a Software Developer Intern, where I gained valuable hands-on experience in a real-world development environment. During my internship, I have developed Amazon Alexa skills to enhance user interaction with the company's website. To achieve this, we utilized the Amazon Alexa Console, AWS Console, Lambda functions and APL for the Interface. By the final week of the internship, we successfully tested and deployed the Alexa skills to the Amazon Alexa Skill Store.
          If you're interested, you can try it out by simply saying, "Hello Alexa, Open Cloud Ladder Consulting" on any Alexa Echo or Alexa Hub devices.
          <br />
          Currently, I am working on an IOT project titled "Smart Agriculture with Field Protection." The project aims to prevent animals from entering farms and damaging crops using a PIR motion detector sensors, buzzer means (siren), electric wire, Low Level DC power supply, and Raspberry Pi 4 module. If an animal attempts to enter in Farm, it receives an electric shock. We also monitor the movement of animals and capture their live coordinates in our devices. The interface developed using Python and Django. Our goals include reducing the product's cost and optimizing power supply usage.
          As your company also hiring for the same skills, I believe I’m the right fit for this role.
          I’m excited about the opportunity to contribute to your team and continue growing as a developer.

        </p>
      </div>
    </div>
  );
};

export default About;
