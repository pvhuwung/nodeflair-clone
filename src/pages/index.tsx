import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { NextUIProvider } from '@nextui-org/react';
import Jcard from '../../components/Jcard';
import { Card, Grid, Text, Link } from "@nextui-org/react";
import JD from '../../components/JD';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  return (
    <>
      <NextUIProvider>

        <body className='bg-gray-100 min-h-screen z-10'>
          <div className='bg-white h-16 realative top-0'></div>
          <div className='bg-green-500 h-64 pl-8 pt-10'>
            <h1 className='text-4xl font-semibold text-white '>NodeFlair.
              <span className='text-yellow-300'>Job</span></h1>
            <h2 className='text-white pt-1 text-xl'>Aggregated job listings from popular job sites and career pages</h2>
            <div className='pt-4'>
              <a></a>
              <button className=' absolute rounded-xl h-10 bg-gray-100  hover:bg-white text-black text-xl font-semibold '>&nbsp;&nbsp;&nbsp;&nbsp;💡  Read Salary Report 2023&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
            </div>
          </div>
          <title>Create Next App</title>

          <section className=' relative pt-10 h-300 '>
            <div className='Parent'>
              <div className='child1 md:block w-full xl:w-auto xl:mx-4'>
              <Jcard
                  Icon="nf.png"
                  Company="NodeFlair"
                  specialization="Software"
                  role="Software Engineer Intern"
                  time="about 3 hours ago"
                  place="Singapore"
                  salary="S$1.2k - S$1.5k"
                  skills={["React", "NodeJS", "Typescript"]}
                />
                <Jcard
                  Icon="bytedance.png"
                  Company="ByteDance"
                  specialization="Software"
                  role="Backend Engineer"
                  time="about 3 hours ago"
                  place="Singapore"
                  salary="S$10.2k - S$15.6k"
                  skills={["AWS", "Docker", "NodeJS"]}
                />
                <Jcard
                  Icon="amazon.png"
                  Company="Amazon"
                  specialization="Solution"
                  role="Solution Architect"
                  time="about 6 hours ago"
                  place="Singapore"
                  salary="S$11,000 - S$17,750 / Monthly"
                  skills={["ORACLE", "GO", "CI", "SAP"]}
                />
                <Jcard
                  Icon="grab.png"
                  Company="Grab"
                  specialization="PM"
                  role="Senior Product Manager"
                  time="about 9 hours ago"
                  place="Singapore"
                  salary="S$7,803 - S$12,228 / Monthly"
                  skills={["Strategy", "GO"]}
                />
                <Jcard
                  Icon="cl.png"
                  Company="Circles.Life"
                  specialization="Fullstack"
                  role="Director of Engineering"
                  time="about 2 days ago"
                  place="Singapore"
                  salary="S$18.2k - S$20.6k"
                  skills={["Strategy", "Container"]}
                />
                <Jcard
                  Icon="apple.png"
                  Company="Apple"
                  specialization="QA"
                  role="Photonics Test Development Engineer"
                  time="about 3 days ago"
                  place="Singapore"
                  salary=""
                  skills={["C++", "LabView", "Python"]}
                />
               
              </div>
              <div className='child2 pt-0 hidden xl:block xl:remove'>
                <JD
                  Icon="nf.png"
                  Company="NodeFlair"
                  specialization="Software"
                  role="Software Engineer Intern"
                  time="about 3 hours ago"
                  place="Singapore"
                  salary="S$1.2k - S$1.5k"
                  skills={["React", "NodeJS", "Typescript"]}
                  
                />


              </div>

            </div>
          </section>
        </body>

      </NextUIProvider>


    </>
  )
}
