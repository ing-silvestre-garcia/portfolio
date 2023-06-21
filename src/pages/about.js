import React, {useRef,useEffect} from 'react'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Skills from '@/components/Skills'
import DevelopSkills from '@/components/DevelopSkills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import { useInView,useMotionValue,useSpring } from 'framer-motion'
import Image from 'next/image'
import profilePic from '../../public/images/profile/developer-pic-2.jpg'
import TransitionEffect from '@/components/TransitionEffect'

const AnimatedNumbers = ({value}) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {duration:3000});
    const isInView = useInView(ref,{once:true});

    useEffect(() => {
        if(isInView){
            motionValue.set(value);
        }
    },[isInView,value,motionValue])

    useEffect(() => {
        springValue.on("change",(latest) => {
            if(ref.current && latest.toFixed(0) <= value ){
                ref.current.textContent = latest.toFixed(0)
            }
        })
    },[springValue,value])
    
    return <span ref={ref}></span>
}

const about = () => {
    return (
        <>
        <Head>
            <title>Silvestre Garcia CV | About Page</title>
            <meta name="keywords" content="UAG,Master,Bachelor,TI,Computer Engineer" />
        </Head>
        <TransitionEffect />
        <main className='flex w.full flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText text="Passion Fuels Purpose!" className='mb-16 lg:!text-7xl sm:!text-6xl xs:text-4xl sm:mb-8' />
                <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                    <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                        <h2 className='mb-4 texxt-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
                        <p className='font-medium'>
                            Hi, I'm Silvestre, a software developer and tech consultant with a passion for creating innovative solutions. 
                            I thrive on tackling complex problems and turning them into elegant and efficient software solutions.</p>

                        <p className='my-4 font-medium'>
                        My dedication to staying up-to-date with the latest industry trends and advancements allows me to deliver forward-thinking 
                        solutions that drive business growth and improve user experiences. I am constantly exploring new technologies, frameworks, 
                        and best practices to ensure that I am at the forefront of innovation. </p>

                        <p className='font-medium'>
                        Beyond development, I also enjoy sharing my knowledge and expertise with others. Whether through mentoring programs or 
                        technical workshops, I find great fulfillment in helping others grow and succeed in the tech industry.</p>
                    </div>
                    <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
                    bg-light p-8 dark:bg-dark dark:border-light xl:cols-span-4 md:order-1 md:col-span-8'>
                        <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
                        <Image src={profilePic} alt="Silver" className='w-full h-auto rounded-2xl' 
                        priority 
                        sizes="(max-width:768px) 100vw,
                        (max-width:1200px) 50vw,
                        33vw"/>
                    </div>

                    <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3  '>
                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                <AnimatedNumbers value="30" />+
                            </span>
                            <h2 className='text-xl font-medoum capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'> satisfied clients</h2>
                        </div>

                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                <AnimatedNumbers value="40" />+
                            </span>
                            <h2 className='text-xl font-medoum capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'> projects completed</h2>
                        </div>

                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                <AnimatedNumbers value="8" />+
                            </span>
                            <h2 className='text-xl font-medoum capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>years of experience</h2>
                        </div>
                    </div>
                </div>
                <Skills />
                <DevelopSkills />
                <Experience />
                <Education />
            </Layout>
        </main>
        </>
    )
}

export default about