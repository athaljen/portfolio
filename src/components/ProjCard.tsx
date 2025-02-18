"use strict;";
import React, { memo } from "react";
import ProjectsData from "../data/ProjectsData";

type Props = {
  data: (typeof ProjectsData)[0];
};

const ProjCard = memo(({ data }: Props) => {
  return (
    <div>
      <div className="project-card" role="button">
        <img src={data?.image} />
        <div className="proj-card-overlay">
          <div>
            <h4>{data.title}</h4>
            <p>{data.description}</p>
          </div>
          <div role="button" className="proj-details-btn">
            Read More
          </div>
        </div>
      </div>
    </div>
  );
});

export default ProjCard;
