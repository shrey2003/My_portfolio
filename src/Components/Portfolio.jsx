/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "AI Research Intern               @School of Computer and Systems Sciences (SCSS), Jawaharlal Nehru University",
    description: "Helped develop and improve ML models using various techniques of NLP over dataset of 10,000+ keywords.",
    
  },
  {
    title: "AI Developer Intern @Munshiverse",
    description:
      "Developed OpenAI GPT 3.5/4 based chatbots Journal Entry Builder Bot and Financial Bot for multiple platforms Leveraged OpenAI API and prompt engineering techniques showcasing automation and proficiency in Python programming improving user interactions by 50% Demonstrated proficiency in Docker and Docker Compose enabling streamlined deployment and containerization of the chatbotassistant reducing deployment time by 40% Deployed projects on Amazon AWS utilizing S3 for efficient storage and retrieval of user images Implemented MongoDB for chathistory storage and retrieval ensuring seamless data management and increasing efficiency by 30%",
  },
  {
    title: "Result Satisfaction Analyst @TELUS International",
    description:
      "Analysing various datasets according to the guidelines provided and resolved data discrepancies by reporting errors in the data which helps in refining data and improved accuracy for research for the organisation by 25% .",
    
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
