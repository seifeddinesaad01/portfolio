import React from "react";
import { projects } from "../../Data/constants";
import { ProjectCard } from "../ProjectCard";
import { SectionHeader } from "../sectionHeader";

const Projects = () => {
  return (
    <>
      <SectionHeader text="Projects" />
      <div className="project__items">
        {projects.map((project, index) => {
          return (
            <ProjectCard
              image={project.image}
              name={project.name}
              description={project.description}
            />
          );
        })}
      </div>
    </>
  );
};

export default Projects;
