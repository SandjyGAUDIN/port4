'use client';

import {Header} from '../_components/Header';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Footer } from '../_components/Footer';

export default function ProjetsPage() {
  const projects = [
    {
      title: "La Forme By Sport",
      description: "Site de gestion de salle de sport",
      image: "/Images/essaie_image_perso.png", // Chemin vers votre image
      link: "#", // Lien vers le projet
      Tags: "JEE, Java, MVC, Méthode Agile, GitHub, Jira, MariaDB"
    },
    {
      title: "BiblioNice",
      description: "Site de gestion de bibliothèque",
      image: "/Images/Laravel.png",
      link: "#",
      Tags: "PHP, Laravel, MVC, Méthode Agile, GitLab, MariaDB",
    },
    {
      title: "WorkAdventure",
      description: "Bureau virtuel en local, personnalisation du projet OpenSource",
      image: "/Images/WorkAdventure.png",
      link: "#",
      Tags: "TypeScript, GitHub Projet OpenSource, Méthode Agile, Cahier des charges",
    },
    {
      title: "WordPress LIICIS",
      description: "Site web avec plugins personnalisés pour le LICIIS",
      image: "/Images/Liciis.png",
      link: "#",
      Tags: "WordPress, PHP, Phpmyadmin, HTML, CSS, JavaScript, Cahier des charges",

    },
    {
      title: "Portfolio",
      description: "Site web personnel avec Next.js",
      image: "/Images/Portfolio.png",
      link: "#",
      Tags: "Next.js, TailWindCss, VercelApp, HTML, CSS, Typescript, Github",
    },
    {
      title: "Application de gestion de service et du personnel",
      description: "Application faite en C#",
      image: "/Images/Csharp.png",
      link: "#",
      Tags: "C#, Github,  MySQL",
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-900 text-white">
        <section className="py-16 container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-16">Mes Réalisations</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-colors h-full flex flex-col group"
              >
                <div className="relative h-100 w-120overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  {project.Tags && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.Tags.split(', ').map((tag, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}