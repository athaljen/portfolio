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
        <iframe src="https://play.google.com/store/apps/details?id=com.story_generation&hl=en_IN"></iframe>
        {/* <img src={data?.image} /> */}
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
