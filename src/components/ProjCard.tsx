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
        <div>{desc}</div>
      </div>
    </div>
  );
});

export default ProjCard;
