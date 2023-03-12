import React from 'react'
interface Iprops {
    text:string;
}
const SectionHeader = ({text}:Iprops) => {
  return (
    <div className="section__header">
        <h2>{text}</h2>
    </div>
  )
}

export default SectionHeader