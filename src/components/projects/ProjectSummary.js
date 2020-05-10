import React from "react";
import moment from "moment";

export const ProjectSummary = ({ project }) => {

  console.log("proj",project);
  
  return (
    <div className="card z-depth0 projectsummary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
  <p>Posted By {project.authorFirstName} {project.authorLastName}</p>
  <p className="grey-text">{project.authorFirstName}</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
