import Link from 'next/link'
import React from 'react'
import Layout from './Layout'
import {motion} from 'framer-motion'

const Skill = ({name,x,y}) => {
    return(
        <motion.div className='flex items-center justify-center rounded-full fount-semibold bg-dark text-light
        py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3
        xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold'
        whileHover={{scale:1.05}}
        initial={{x:0,y:0}}
        whileInView={{x:x,y:y,transition:{duration:1.5}}}
        viewport={{once:true}}>
            {name}
        </motion.div>
    )
}

const Skills = () => {
    return (
        <>
            <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'>Skills</h2>
            <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark 
            lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] 
            lg:bg-circularLightLg lg:dark:bg-circularDarkLg
            md:bg-circularLightMd md:dark:bg-circularDarkMd
            sm:bg-circularLightSm sm:dark:bg-circularDarkSm'>
                <motion.div className='flex items-center justify-center rounded-full fount-semibold bg-dark text-light
                p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2'
                whileHover={{scale:1.05}}>
                    Technology
                </motion.div>
                <Skill name="Odoo Implementation" x="-30vw" y="-5vw" />
                <Skill name="ERP Implementation" x="-21vw" y="8vw" />
                <Skill name="KPI Management" x="-28vw" y="3vw" />
                <Skill name="Google Sheet automation" x="15vw" y="-1vw" />
                <Skill name="Project Planning" x="-15vw" y="-4vw" />
                <Skill name="Automate Processes" x="-15vw" y="18vw" />
                <Skill name="GIT Knowledge" x="15vw" y="18vw" />
                <Skill name="AWS Services" x="-5vw" y="-20vw" />
                <Skill name="ChatBot Implementation" x="1vw" y="-5vw" />
                <Skill name="Social Media Link" x="-5vw" y="-20vw" />
                <Skill name="SCRUM Implementation" x="20vw" y="-15vw" />
                <Skill name="Clean code" x="10vw" y="-20vw" />
                <Skill name="UML Knowledge" x="20vw" y="-6vw" />
                <Skill name="GCP Services" x="20vw" y="6vw" />
                <Skill name="API Knowledge" x="30vw" y="15vw" />
                <Skill name="Wordpress Implementation" x="0vw" y="12vw" />
                <Skill name="Software Develop" x="-20vw" y="-12vw" />
                <Skill name="Web Design" x="32vw" y="-5vw" />
                <Skill name="Firebase Knowledge" x="5vw" y="-13vw" />
            </div>
        </>
    )
}

export default Skills