'use client';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image";
import Link from "next/link";

export default function E5() {
    const projects = [
        {
          title: "La Forme By Sport",
          description: "Site de gestion de salle de sport",
          image: "/Images/essaie_image_perso.png",
          link: "#",
          Tags: "JEE, Java, MVC, Méthode Agile, GitHub, Jira"
        },
        {
          title: "BiblioNice",
          description: "Site de gestion de bibliothèque",
          image: "/Images/Laravel.png",
          link: "#",
          Tags: "PHP, Laravel, MVC, Méthode Agile, GitLab",
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
        }
      ];

    return (
      <div className="min-h-screen bg-gray-900 text-gray-100">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4">
        </div>

        <section id="E5" className="py-12 px-4 md:px-8 lg:py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Mes réalisations</h2>
            
            {/* Grille optimisée : 1 colonne sur mobile, 2 sur tablette, 4 sur desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {projects.map((project, index) => (
                <Link 
                  key={index} 
                  href={project.link} 
                  className="group flex flex-col h-full transition-transform duration-300 hover:-translate-y-2"
                >
                  <Card className="flex flex-col h-full bg-gray-800/50 border-gray-700 overflow-hidden backdrop-blur-sm shadow-xl">
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <CardHeader className="p-5">
                      <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-5 pt-0 flex-grow flex flex-col justify-between">
                      <p className="text-sm text-gray-400 leading-relaxed mb-6">
                        {project.description}
                      </p>
                      
                      {project.Tags && (
                        <div className="flex flex-wrap gap-2 mt-auto">
                          {project.Tags.split(', ').map((tag, i) => (
                            <span 
                              key={i} 
                              className="px-2.5 py-1 bg-blue-900/30 text-blue-300 border border-blue-800/50 rounded-md text-[10px] font-medium tracking-wide uppercase"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {/* Bouton Voir tout corrigé pour mobile */}
            <div className="text-center mt-16 px-4">
              <Button 
                asChild
                variant="default" 
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 py-6 px-10 text-white rounded-xl shadow-lg shadow-blue-900/20 transition-all active:scale-95"
              >
                <Link href="/Projets" className="text-lg font-bold">
                  Voir toutes mes réalisations
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    );
}