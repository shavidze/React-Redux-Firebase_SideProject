import React from "react";

export const ProjectDetails = (props) => {
  console.log("props = ", props.match.params.id);
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title</span>
          <div className="card-action great lighten-4 grey-text">
            <div>Posted by me</div>
            <div className="">2nd September, 2am</div>
          </div>
        </div>
      </div>
    </div>
  );
};
