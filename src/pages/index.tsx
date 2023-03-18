import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { NextUIProvider } from "@nextui-org/react";
import Jcard from "../../components/Jcard";
import { Card, Grid, Text, Link } from "@nextui-org/react";
import JD from "../../components/JD";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const allJobs = [
  {
    Icon: "nf.png",
    Company: "NodeFlair",
    specialization: "Software",
    role: "Software Engineer Intern",
    time: "about 3 hours ago",
    place: "Singapore",
    salary: "S$1.2k - S$1.5k",
    skills: ["React", "NodeJS", "Typescript"],
  },
  {
    Icon: "bytedance.png",
    Company: "ByteDance",
    specialization: "Software",
    role: "Backend Engineer",
    time: "about 3 hours ago",
    place: "Singapore",
    salary: "S$10.2k - S$15.6k",
    skills: ["AWS", "Docker", "NodeJS"],
  },
  {
    Icon: "amz.png",
    Company: "Amazon",
    specialization: "Solution",
    role: "Solution Architect",
    time: "about 6 hours ago",
    place: "Singapore",
    salary: "S$11,000 - S$17,750 / Monthly",
    skills: ["ORACLE", "GO", "CI", "SAP"],
  },
  {
    Icon: "grab.png",
    Company: "Grab",
    specialization: "PM",
    role: "Senior Product Manager",
    time: "about 9 hours ago",
    place: "Singapore",
    salary: "S$7,803 - S$12,228 / Monthly",
    skills: ["Strategy", "GO"],
  },
  {
    Icon: "cl.png",
    Company: "Circles.Life",
    specialization: "Fullstack",
    role: "Director of Engineering",
    time: "about 2 days ago",
    place: "Singapore",
    salary: "S$18.2k - S$20.6k",
    skills: ["Strategy", "Container"],
  },
  {
    Icon: "apple.png",
    Company: "Apple",
    specialization: "QA",
    role: "Photonics Test Engineer",
    time: "about 3 days ago",
    place: "Singapore",
    salary: "",
    skills: ["C++", "LabView", "Python"],
  },
  {
    Icon: "apple.png",
    Company: "Apple",
    specialization: "QA",
    role: "Photonics Test Engineer",
    time: "about 3 days ago",
    place: "Singapore",
    salary: "",
    skills: ["C++", "LabView", "Python"],
  },
  {
    Icon: "apple.png",
    Company: "Apple",
    specialization: "QA",
    role: "Photonics Test Engineer",
    time: "about 3 days ago",
    place: "Singapore",
    salary: "",
    skills: ["C++", "LabView", "Python"],
  },
  {
    Icon: "apple.png",
    Company: "Apple",
    specialization: "QA",
    role: "Photonics Test Engineer",
    time: "about 3 days ago",
    place: "Singapore",
    salary: "",
    skills: ["C++", "LabView", "Python"],
  },
];

export default function Home() {
  const [activeJob, setActiveJob] = useState(0);
  return (
    <>
      <NextUIProvider>
        <body className="bg-gray-200 min-h-screen snap-center	 ">
        <header className=" bg-white h-10 realative top-0 sticky z-20"></header>
        <div className="bg-green-500 h-64 pl-8 pt-10 z-19">
          <h1 className="text-4xl font-semibold text-white">
            NodeFlair.
            <span className="text-yellow-300">Job</span>
          </h1>
          <h2 className="text-white pt-1 text-xl">
            Aggregated job listings from popular job sites and career pages
          </h2>

          <title>NodeFlair clone</title>
          <button className=" absolute rounded-xl h-10 bg-gray-100  hover:bg-white text-black text-xl font-semibold ">
            &nbsp;&nbsp;&nbsp;&nbsp;💡 Read Salary Report
            2023&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </button>
          <section className=" relative pt-36 h-300   ">
            <div className="Parent pt-10 ">
              <div className="p-1.5 relative child1  md:block w-full xl:w-auto xl:mx-4  max-w-none  max-h-[50rem] overflow-y-scroll overflow-x-hidden  ">
                {allJobs.map((job, index) => (
                  <Jcard
                    key={index}
                    onSelect={() => setActiveJob(index)}
                    Icon={job.Icon}
                    Company={job.Company}
                    specialization={job.specialization}
                    role={job.role}
                    time={job.time}
                    place={job.place}
                    salary={job.salary}
                    skills={job.skills}
                  />
                ))}
              </div>
              <div className="relative pt-1.5 child2 hidden xl:block xl:remove space-y-0 max-h-[50rem] h-1000 text-lg overflow-y-scroll pr-5 scrollbar-thin
    scrollbar-track-none">
                <JD
                  Icon={allJobs[activeJob].Icon}
                  Company={allJobs[activeJob].Company}
                  specialization={allJobs[activeJob].specialization}
                  role={allJobs[activeJob].role}
                  time={allJobs[activeJob].time}
                  place={allJobs[activeJob].place}
                  salary={allJobs[activeJob].salary}
                  skills={allJobs[activeJob].skills}
                />
              </div>
            </div>
          </section>
        </div>
        </body>
      </NextUIProvider>
      
    </>
  );
}
