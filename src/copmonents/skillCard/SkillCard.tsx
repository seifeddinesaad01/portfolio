import React from 'react'
interface Iskills{
name:string;
image:string;
}
const SkillCard = ({name,image}:Iskills) => {
  return (
    <div className="skill__card">
        <img src={image} alt="name" />
        {/* <p>{name}</p> */}
    </div>
  )
}

export default SkillCard;