"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNode,
  FaPython,
  FaGit,
} from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { SiTailwindcss, SiNextdotjs, SiFlask, SiJquery } from "react-icons/si";
import { TbSql } from "react-icons/tb";

const about = {
  title: "About Me",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo libero, quia magni, quasi dolorem possimus laboriosam atque natus similique recusandae modi consequatur provident expedita autem tempore accusamus inventore laborum sint.",
  info: [
    {
      fieldName: "Name",
      fieldVal: "Kashyapa P.A. Jayasekera",
    },
    {
      fieldName: "Phone",
      fieldVal: "(+94) 775966864",
    },
    {
      fieldName: "Experience",
      fieldVal: "12+ Years ",
    },
    {
      fieldName: "Nationality",
      fieldVal: "French, Sri Lankan",
    },
    {
      fieldName: "Email",
      fieldVal: "kashyapa.jayasekera@gmail.com",
    },
    {
      fieldName: "Languages",
      fieldVal: "English, French, Sinhala",
    },
  ],
};

const experience = {
  icon: "",
  title: "My Experience",
  description:
    "Throughout my diverse work experiences, I've had the oppurtunity to work most importantly on full stack web development and some data analysis. Outside of technical work, I have also worked part time as a content moderator at a startup and basketball coach/trainer.",
  items: [
    {
      company: "UltraSuperNew",
      position: "Full Stack Developer Intern",
      duration: "Jun 2023 - Aug 2023",
    },
    {
      company: "Mitra Innovation",
      position: "Data Analyst Intern",
      duration: "Jun 2022 - Aug 2022",
    },
    {
      company: "Sidechat/Yik Yak",
      position: "Content Moderator",
      duration: "Dec 2022 - Present",
    },
    {
      company: "Knights Basketball Academy",
      position: "Assistant Basketball Coach",
      duration: "Sep 2021 - Feb 2023",
    },
  ],
};

const education = {
  icon: "",
  title: "My Education",
  description:
    "",
  items: [
    {
      institution: "New York University",
      position: "Bachelor of Science in Computer Science",
      duration: "2020 - 2024",
    },
  ],
};

const skills = {
  title: "Technical Skills",
  desciption:
    "Over time I have gained the following skills through internship experience, personal projects, or school coursework.",
  skillList: [
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNode />,
      name: "node.js",
    },
    {
      icon: <TbSql />,
      name: "sql",
    },
    {
      icon: <FaGit />,
      name: "git",
    },
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <SiJquery />,
      name: "jquery",
    },
    {
      icon: <FaPython />,
      name: "python",
    },
    {
      icon: <SiFlask />,
      name: "flask",
    },
    {
      icon: <TbBrandCpp />,
      name: "c++",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { delay, motion } from "framer-motion";
import { Scroll } from "lucide-react";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            {/* <TabsTrigger value="about">About me</TabsTrigger> */}
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex  items-center gap-3">
                            {/* <span className="w-[6px] h-[6px] rounded-full"></span> */}
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex  items-center gap-3">
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.desciption}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-lg">{item.fieldVal}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
