import React, { useEffect, useState } from "react";

const skillsData = [
  "React Native",
  "React",
  "Next.js",
  "Node.js",
  "JavaScript ES6",
  "TypeScript",
  "Android & iOS",
  "HTML & CSS",
  "Git & GitHub",
  "Redux & Toolkit",
  "RESTFul APIs",
  "GraphQL",
  "VS Code",
  "Android Studio & Xcode",
];

const typingSpeed = 100; // speed per letter
const deletingSpeed = 50;
const pauseTime = 1500;

const HomeChangingText = () => {
  const [skillIndex, setSkillIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const currentSkill = skillsData[skillIndex];

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText.length < currentSkill.length) {
      // Typing
      timeout = setTimeout(() => {
        setDisplayText(currentSkill.slice(0, displayText.length + 1));
      }, typingSpeed);
    } else if (isDeleting && displayText.length > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayText(currentSkill.slice(0, displayText.length - 1));
      }, deletingSpeed);
    } else if (!isDeleting && displayText.length === currentSkill.length) {
      // Pause before delete
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && displayText.length === 0) {
      // Move to next word
      setIsDeleting(false);
      setSkillIndex((prev) => (prev + 1) % skillsData.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentSkill, skillIndex]);

  return (
    <div className="home-changing-text-container">
      I know
      <div className="changing-text">
        {displayText}
        <span className="cursor">|</span>
      </div>
    </div>
  );
};

export default HomeChangingText;
