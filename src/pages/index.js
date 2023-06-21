import Head from 'next/head'
import Layout from '../components/Layout'
import HireMe from '../components/HireMe'
import AnimatedText from '../components/AnimatedText'
import {LinkArrow} from '../components/Icons'
import Image from 'next/image'
import Link from 'next/link'
import profilePic from '../../public/images/profile/developer-pic-1.png'
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg'
import TransitionEffect from '@/components/TransitionEffect'

export default function Home() {
  return (
    <>
      <Head>
        <title>Silvestre Garcia CV</title>
        <meta name="author" content="Silvestre Garcia Martin del Campo" />
        <meta name="keywords" content="CV,Portfolio,Engineer,Tech,Technology,Master,TI,IT,Solutions,Automate" />
      </Head>
      <TransitionEffect />
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className='w-1/2 md:w-full'>
              <Image src={profilePic} alt="SilverGarcia" className="w-full h-auto lg:hidden md:inline-block md:w-full" 
              priority 
              sizes="(max-width:768px) 100vw,
              (max-width:1200px) 50vw,
              33vw" />
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText text="Turning Problems Into Solutions With Technology." className='!text-6xl !text-left 
              xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl'/>
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
              As a skilled full-stack developer, I am dedicated to turning ideas into innovative web solutions. 
Explore my latest projects and articles.
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href="/Resume.pdf" target={"_blank"}
                className='flex items-center bg-dark text-light p-2.5 px-6
                rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                border-2 boder-solid boder-transparent hover:border-dark
                dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                hover:dark:border-light md:p-2 md:px-4 md:text-base'
                download={true}>
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link href="mailto:ing.silvestre.garcia@gmail.com" target={"_blank"}
                className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base ">Contact</Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
      </main>
    </>
  )
}
