import React from 'react'
import SkillPhoto from './SkillPhoto.jsx'

const SkillGroupCard = (props) => {
  return (
    <div className="bg-[#141414] p-7 rounded-xl">
        <h2 className="text-center text-3xl font-bold text-white">{props.skillType}</h2>
        <div className="grid grid-cols-3 gap-6 mt-6 w-full">
            {props.skills.map((skill, index) => (
                <SkillPhoto imgPath={skill.imgPath} />
            ))}
        </div>
    </div>
  )
}

export default SkillGroupCard