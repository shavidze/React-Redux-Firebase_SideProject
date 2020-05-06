import React from "react";
import ProjectSummary from "./ProjectSummary";

export const ProjectList = ({ projects }) => {
  return (
    <div className="project-list section">
      {projects &&
        projects.map((project) => {
          return (
            <ProjectSummary key={project.id} project={project}></ProjectSummary>
          );
        })}
    </div>
  );
};
