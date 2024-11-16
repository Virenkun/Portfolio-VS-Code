import React from "react";
import styles from "./Projects.module.css";
import ProjectCard from "../../components/project-card/ProjectCard";
import covidTrackerImage from "../../assets/project-images/covid-tracker.png";
import vsCodePortfolioImage from "../../assets/project-images/vs-code-portfolio.png";
import encodeImage from "../../assets/project-images/encode.png";

const projectsData = [];

const Projects = () => {
  return (
    <>
      <h3>Stuff I've Built So Far</h3>
      <div className={styles.container}>
        {projectsData.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </>
  );
};

export default Projects;
