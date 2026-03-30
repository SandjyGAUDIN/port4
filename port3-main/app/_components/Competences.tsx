"use client";
import { useState } from "react";
import { JSX } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import icons from "./icons";
import Autoplay from "embla-carousel-autoplay";
import { motion, AnimatePresence } from "framer-motion"; 

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
      { icon: <SiTypescript size={40} title="Compétence TypeScript et JavaScript" />, label: "TypeScript/JavaScript" },
      { icon: <SiPython size={40} title="Expertise Python" />, label: "Python" },
      { icon: <SiNextdotjs size={40} title="Développement Next.js" />, label: "Next.js (HTML, CSS, JS)" },
      { icon: <SiTailwindcss size={40} title="Stylisation Tailwind CSS" />, label: "Tailwind" },
      { icon: <SiPhp size={40} title="Programmation PHP" />, label: "PHP" },
      { icon: <SiLaravel size={40} title="Framework Laravel" />, label: "Laravel" },
      { icon: <img src="/Images/java.svg" alt="Expertise Java et JEE - Sandjy Gaudin" width={40} height={40} />, label: "Java et JEE" },
      { icon: <img src="/Images/Logo_C_sharp.svg" alt="Développement C# .NET - Sandjy Gaudin" width={40} height={40} />, label: "C#" },
    ],
    databases: [
      { icon: <SiMysql size={40} title="Gestion de base de données MySQL" />, label: "MySQL" },
      { icon: <SiSqlite size={40} title="Utilisation SQLite" />, label: "SQLite" },
      { icon: <SiMariadb size={40} title="Administration MariaDB" />, label: "MariaDB" },
      { icon: <SiPhpmyadmin size={40} title="Interface PhpMyAdmin" />, label: "PhpMyAdmin" },
    ],
    services: [
      { icon: <SiDocker size={40} title="Conteneurisation Docker" />, label: "Docker" },
      { icon: <SiGithub size={40} title="Gestion de version Git et GitHub" />, label: "GitHub/GitLab" },
      { icon: <SiApachenetbeanside size={40} title="IDE Apache NetBeans" />, label: "NetBeans" },
      { icon: <img src="/Images/visual-studio-code.svg" alt="Éditeur de code Visual Studio Code" width={40} height={40} />, label: "VS Code & Visual Studio" },
      { icon : <icons.VSCodeIcon size={40} />, label: "Win'design" }
    ],
  };

  return (
    <section id="Competences" className="py-24 px-4 md:px-8 bg-gray-900" aria-labelledby="skills-title">
      <h2 id="skills-title" className="text-3xl font-bold text-center mb-12 text-white">
        Stack technique et applications informatiques
      </h2>
      
      <Card className="max-w-4xl mx-auto bg-gray-800 border border-gray-700">
        <CardHeader>
          <nav className="flex flex-wrap justify-center gap-3 mb-6" aria-label="Catégories de compétences">
            {(["languages", "databases", "services"] as (keyof SkillsData)[]).map((tab) => (
              <Badge
                key={tab}
                onClick={() => setActiveTab(tab)}
                role="button"
                aria-pressed={activeTab === tab}
                className={`cursor-pointer text-sm md:text-base px-6 py-2 rounded-full transition-all
                  ${activeTab === tab
                    ? "bg-blue-500 text-white shadow-lg shadow-blue-500/20"
                    : "bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500/10"}
                `}
              >
                {tab === "languages" && "Langages & Frameworks"}
                {tab === "databases" && "Bases de données"}
                {tab === "services" && "Outils & Services"}
              </Badge>
            ))}
          </nav>
        </CardHeader>

        <CardContent>
          <AnimatePresence mode="wait"> 
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Carousel
                opts={{ align: "start", loop: true }}
                plugins={[Autoplay({ delay: 3000 })]}
                className="w-full"
              >
                <CarouselContent>
                  {skillsData[activeTab].map((skill, index) => (
                    <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/4">
                      <div className="p-2">
                        <Card className="bg-gray-700/50 border-gray-600 h-32 flex flex-col items-center justify-center p-4 hover:border-blue-500 transition-all group">
                          <div 
                            className="mb-3 text-gray-300 group-hover:text-blue-400 transition-colors"
                            aria-hidden="true" // L'icône est décorative car le label est en dessous
                          >
                            {skill.icon}
                          </div>
                          <span className="text-white text-xs font-semibold text-center">
                            {skill.label}
                          </span>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex -left-12" aria-label="Compétence précédente" />
                <CarouselNext className="hidden md:flex -right-12" aria-label="Compétence suivante" />
              </Carousel>
            </motion.div>
          </AnimatePresence>
        </CardContent>
      </Card>
    </section>
  );
}