import React from "react";
import { skills } from "../../Data/constants";
import { SectionHeader } from "../sectionHeader";
import { SkillCard } from "../skillCard";

const Skills = () => {
  return (
    <>
      <SectionHeader text="Skills" />
      <div className="skills__container" id="Skills">
        {skills.map((skill, index) => {
          return (
            <SkillCard
              key={index}
              image={skill.image}
              name={skill.name}
              progress={skill.progress}
              bgColor={skill.bgColor}
            />
          );
        })}
      </div>
    </>
  );
};

export default Skills;
