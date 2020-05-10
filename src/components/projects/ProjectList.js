import React from "react";
import ProjectSummary from "./ProjectSummary";
import { Link } from "react-router-dom";

export const ProjectList = ({ projects }) => {
  return (
    <div className="project-list section">
      {projects &&
        projects.map((project, index) => {
          return (
            <Link to={"/project/" + project.id}>
              <ProjectSummary key={index} project={project}></ProjectSummary>
            </Link>
          );
        })}
    </div>
  );
};
