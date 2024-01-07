import React from 'react'
import SkillComp from "./SkillComp"

function Skills() {
  return (
    <section>
        <h1 className='text-white text-4xl font-bold text-center mt-12 lg:mt-20 mb-12 lg:mb-20'>Skills</h1>
        <div className='flex flex-row flex-wrap gap-4 lg:gap-12 mb-20'>
        <SkillComp
        img = "/Images/Skills/Html.png"
        name ="HTML"/>
         <SkillComp
        img = "/Images/Skills/Css.png"
        name ="CSS"/>
         <SkillComp
        img = "/Images/Skills/Js.png"
        name ="JavaScript"/>
         <SkillComp
        img = "/Images/Skills/React.png"
        name ="React"/>
         <SkillComp
        img = "/Images/Skills/NextJs.png"
        name ="NextJs"/>
         <SkillComp
        img = "/Images/Skills/MongoDb.png"
        name ="MongoDB"/>
         <SkillComp
        img = "/Images/Skills/Figma.png"
        name ="Figma"/>
        </div>
       
    </section>  )
}

export default Skills