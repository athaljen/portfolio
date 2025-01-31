"use strict;";
import React, { memo } from "react";

type Props = {
  image: string;
  title: string;
  desc: string;
};
const ProjCard = memo(({ image, title, desc }: Props) => {
  return (
    <div>
      <div className="project-card">
        <img src={image} />
        <div className="proj-card-overlay">
          <div>
            <h4>{title}</h4>
            <p>{desc}</p>
          </div>
          <div className="proj-card-btns">
            <div role="button">
              <i className="fa-solid fa-circle-info"></i>{" "}
            </div>
            <a href="https://www.instagram.com/athal_jen/" target="_blank">
              <i className="fa-solid fa-square-arrow-up-right"></i>{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ProjCard;
