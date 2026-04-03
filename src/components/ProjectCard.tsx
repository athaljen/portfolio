import React, { memo } from "react";

import ProjectsData from "../data/ProjectsData";

type Props = {
  data: (typeof ProjectsData)[0];
};

const ProjectCard = memo(({ data }: Props) => {
  return (
    <div className="project-card" role="button">
      <img src={data?.image.src} />
      <div className="project-card-overlay">
        <div>
          <h4>{data.title}</h4>
          <p>{data.type}</p>
          <p>{data.date}</p>
          <p className="project-card-overlay-desc">{data.description}</p>
        </div>
        <div role="button" className="project-details-btn">
          Read More
        </div>
      </div>
    </div>
  );
});

export default memo(ProjectCard);
