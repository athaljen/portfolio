"use strict;";
import React, { memo } from "react";

type Props = {
  title: string;
  date: string;
  company: string;
  location: string;
  description: string;
};
const ExpCard = memo(
  ({ company, date, description, location, title }: Props) => {
    return (
      <div>
        <div className="exp-card">
          <h3>
            {title} <span>({date})</span>
          </h3>
          <h4>
            {company}
            <span>~ {location}</span>
          </h4>
          <p>{description}</p>
        </div>
      </div>
    );
  }
);

export default ExpCard;
