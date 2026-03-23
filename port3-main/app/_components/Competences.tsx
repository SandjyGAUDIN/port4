"use client";

import { useState } from "react";
import { JSX } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import icons from "./icons";
import Autoplay from "embla-carousel-autoplay";
import { motion, AnimatePresence } from "framer-motion"; 

// Import des icônes (exemples, utilise react-icons ou tes SVG TSX)
import { 
  SiTypescript, SiPython, SiNextdotjs, SiTailwindcss, SiPhp, SiLaravel,
  SiMysql, SiSqlite, SiMariadb, SiPhpmyadmin,
  SiDocker, SiGithub, SiApachenetbeanside
} from "react-icons/si";

type SkillItem = {
  icon: JSX.Element;
  label: string;
};

type SkillsData = {
  languages: SkillItem[];
  databases: SkillItem[];
  services: SkillItem[];
};

export function Skills() {
  const [activeTab, setActiveTab] = useState<keyof SkillsData>("languages");

  const skillsData: SkillsData = {
    languages: [
      { icon: <SiTypescript size={40} />, label: "TypeScript/JavaScript" },
      { icon: <SiPython size={40} />, label: "Python" },
      { icon: <SiNextdotjs size={40} />, label: "Next.js (HTML, CSS, JS)" },
      { icon: <SiTailwindcss size={40} />, label: "Tailwind" },
      { icon: <SiPhp size={40}/>, label: "PHP" },
      { icon: <SiLaravel size={40} />, label: "Laravel" },
      {icon : <img src="/Images/java.svg" alt="Java" width={40} height={40} />, label: "Java et JEE" },
      {icon : <img src="/Images/Logo_C_sharp.svg" alt="C#" width={40} height={40} />, label: "C#" },
    ],
    databases: [
      { icon: <SiMysql size={40} />, label: "MySQL" },
      { icon: <SiSqlite size={40} />, label: "SQLite" },
      { icon: <SiMariadb size={40} />, label: "MariaDB" },
      { icon: <SiPhpmyadmin size={40} />, label: "PhpMyAdmin" },
    ],
    services: [
      { icon: <SiDocker size={40} />, label: "Docker" },
      { icon: <SiGithub size={40} />, label: "GitHub/GitLab" },
      { icon: <SiApachenetbeanside size={40} />, label: "NetBeans" },
      {icon : <img src="/Images/visual-studio-code.svg" alt="Visual Studio Code" width={40} height={40} />, label: "Visual Studio Code et Visual Studio" }, /* Image buggé pour l'instant */
      {icon : <icons.VSCodeIcon size={40}/>, label: "Win'design" }

    ],
  };

  return (
    <section id="competences" className="py-40 px-4 md:px-8 bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-8">Stack technique et applications</h2>
      
      <Card className="max-w-4xl mx-auto bg-gray-800 border border-gray-700">
        <CardHeader>
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {(["languages", "databases", "services"] as (keyof SkillsData)[]).map((tab) => (
              <Badge
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`cursor-pointer text-sm md:text-base px-4 py-2 rounded-full transition-colors
                  ${activeTab === tab
                    ? "bg-blue-500 text-white"
                    : "bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"}
                `}
              >
                {tab === "languages" && "Langages/Frameworks"}
                {tab === "databases" && "Bases de données"}
                {tab === "services" && "Applications/Services"}
              </Badge>
            ))}
          </div>
        </CardHeader>

        <CardContent>
          <AnimatePresence mode="wait"> 
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                plugins={[
                  Autoplay({
                    delay: 3000,
                  }),
                ]}
                className="w-full"
              >
                <CarouselContent>
                  {skillsData[activeTab].map((skill, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <Card className="bg-gray-800 border border-gray-700 h-full flex flex-col items-center justify-center p-6 hover:shadow-lg transition-shadow">
                        <CardContent className="flex flex-col items-center justify-center gap-2 p-0">
                          {skill.icon}
                          <span className="text-white text-sm font-medium text-center">{skill.label}</span>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden sm:flex" />
                <CarouselNext className="hidden sm:flex" />
              </Carousel>
            </motion.div>
          </AnimatePresence>
        </CardContent>
      </Card>
    </section>
  );
}
