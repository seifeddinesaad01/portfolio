import React from "react";
interface Iprops {
  image: string;
  name: string;
  description: string;
}
const ProjectCard = ({ image, name, description }: Iprops) => {
  return (
    <div className="project__card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProjectCard;
