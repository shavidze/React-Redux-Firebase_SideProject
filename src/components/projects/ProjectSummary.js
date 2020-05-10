import React from "react";

export const ProjectSummary = ({ project }) => {
  return (
    <div className="card z-depth0 projectsummary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
  <p>Posted By {project.authorFirstName} {project.authorLastName}</p>
        <p className="grey-text">3rd September</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
