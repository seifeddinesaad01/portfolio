import React from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
interface Iskills {
  name: string;
  image: string;
  progress: number;
  bgColor: string;
}
const SkillCard = ({ name, image, progress, bgColor }: Iskills) => {
  return (
    <div className="skill__card">
      <img src={image} alt="name" />
      <ProgressBar progress={progress} bgColor={bgColor} />
    </div>َ
ذ  );
};

export default SkillCard;
