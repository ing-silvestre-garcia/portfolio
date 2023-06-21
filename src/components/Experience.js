import React,{useRef} from 'react';
import {motion,useScroll} from 'framer-motion'
import LiIcon from "./LiIcon"

const Details = ({position,company,companyLink,time,address,work}) => {
    const ref = useRef(null)
    return(
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
            <LiIcon reference={ref} />
            <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.5, type:"spring"}}>
                <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp;
                <a href={companyLink} target="_blank" className='text-primary dark:text-primaryDark capitalize'>@{company}</a>
                </h3>
                <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs::text-sm'>
                    {time} | {address}
                </span>
                <p className='font-medium w-full md:text-sm'>
                    {work}
                </p>
            </motion.div>
        </li>
    )
}

const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    });

    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>Experience</h2>
            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>

                <motion.div
                style={{scaleY: scrollYProgress}} 
                className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
                md:w-[2px] md:left-[10px] xs:left-[20px]' />

                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    <Details 
                    position="Fullstack Developer"
                    company="Blacktrust"
                    companyLink="https://blacktrust.net/"
                    time="2021-Present"
                    address="Mountain View, CA"
                    work="Create new software applications with new language (Reactjs and
                        Nodejs).
                        Implement TDD and cleaning code in Reactjs projects.
                        Implement Firebase with Reactjs and Nodejs project.
                        Implement microservices with Reactjs and Nodejs."
                    />

                    <Details 
                    position="IT Leader"
                    company="Pegasus Control"
                    companyLink="https://www.pegasus.com.mx/en"
                    time="2019-2021"
                    address="Guadalajara, Jal, Mex"
                    work="Infrastructure team management (AWS and Servers).
                    Project planning.
                    Odoo implementation.
                    Process analysis.
                    KPI usage and measurement.
                    Management and implementation of new technologies.
                    Participation in SAT certification for Volumetric Controls"
                    />

                    <Details 
                    position="Product Leader"
                    company="Pegasus Control"
                    companyLink="https://www.pegasus.com.mx/en"
                    time="2015-2019"
                    address="Guadalajara, Jal, Mex"
                    work="Development team management.
                    Project planning
                    Product architecture design
                    Taking requirements
                    Using SCRUM
                    Participation in NOM-0185 certification."
                    />

                    <Details 
                    position="Software Engineer"
                    company="Witen Consulting"
                    companyLink="https://witenconsulting.com/"
                    time="2008-2012"
                    address="Guadalajara, Jal, Mex"
                    work="Worked on web page programming, take customer requirements, technical support. Created an ERP modules:
                    Catalogs, Selling: Remission, Billing, Order, Quotation, Credit Notes, Consignment,
                    Payments, Purchases, Finances, Accounting and Inventory"
                    />
                </ul>
            </div>
        </div>
    )
}

export default Experience