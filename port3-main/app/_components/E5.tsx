'use client';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image";

export default function E5() {
    const projects = [
        {
          title: "La Forme By Sport",
          description: "Site de gestion de salle de sport",
          image: "/Images/essaie_image_perso.png", // Chemin vers votre image
          link: "#", // Lien vers le projet
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
      <div className="min-h-screen p-30 bg-gray-900 text-gray-100">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4">
          {/* <div className="md:w-4/4">
            <div className="sticky top-6">
              <iframe
                src="/documents/GrilleE5_Gaudin.pdf#view=fitH&zoom=85"
                className="w-full h-[100vh] border border-gray-700 rounded-lg shadow-lg" 
                title="Grille E5 Gaudin" 
              />
              <div className="mt-3 text-center">
                <a
                  href="/documents/GrilleE5_Gaudin.pdf"
                  download="GrilleE5_Gaudin.pdf"
                  className="text-sm text-blue-400 hover:text-blue-300 transition-colors" 
                >
                  Télécharger le PDF
                </a>
              </div>
            </div>
          </div> */}
        </div>
        <section className="bg-gray-900 py-16 px-4 md:px-8 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Mes réalisations</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <a 
              key={index} 
              href={project.link} 
              className="group block transition-transform hover:scale-105"
            >
              <Card className="h-full bg-gray-800 border-gray-700 overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-white">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{project.description}</p>
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
            </a>
          ))}
        </div>
      </div>
      <div className="text-center mt-8">
          <Button 
            variant="default" 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 px-8 py-6 text-lg font-semibold transition-all text-color-white"
          >
            <a 
            href="/Projets" 
            className="text-white hover:text-blue-300 transition-colors" 
          >
            Voir toutes mes réalisations
          </a>
          </Button>
        </div>
    </section>
      </div>

      

      
    )
  }