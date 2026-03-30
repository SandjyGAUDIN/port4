'use client';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function E5() {
    const projects = [
        {
          title: "La Forme By Sport",
          description: "Plateforme complète de gestion pour salles de sport (Inscriptions, plannings, abonnements).",
          image: "/Images/essaie_image_perso.png",
          link: "#",
          Tags: "JEE, Java, MVC, Méthode Agile, GitHub, Jira"
        },
        {
          title: "BiblioNice",
          description: "Système de gestion de bibliothèque avec catalogue interactif et emprunts automatisés.",
          image: "/Images/Laravel.png",
          link: "#",
          Tags: "PHP, Laravel, MVC, Méthode Agile, GitLab",
        },
        {
          title: "WorkAdventure",
          description: "Bureau virtuel immersif en local, personnalisation poussée du projet OpenSource.",
          image: "/Images/WorkAdventure.png",
          link: "#",
          Tags: "TypeScript, GitHub, Méthode Agile, Cahier des charges",
        },
        {
          title: "WordPress LIICIS",
          description: "Site web institutionnel avec plugins PHP personnalisés pour le laboratoire LICIIS.",
          image: "/Images/Liciis.png",
          link: "#",
          Tags: "WordPress, PHP, HTML/CSS, JavaScript",
        }
      ];

    return (
      <section id="E5" className="py-24 px-4 md:px-8 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">Mes réalisations majeures</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project, index) => (
              <Link 
                key={index} 
                href={project.link} 
                className="group flex flex-col h-full transition-all duration-300 hover:-translate-y-2"
                title={`Voir le projet ${project.title} de Sandjy Gaudin`}
              >
                <Card className="flex flex-col h-full bg-gray-800/40 border-gray-700 overflow-hidden backdrop-blur-sm shadow-xl hover:border-blue-500/50">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={`Projet ${project.title} développé par Sandjy Gaudin`}
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
                            className="px-2 py-1 bg-blue-900/30 text-blue-300 border border-blue-800/50 rounded text-[10px] font-bold uppercase"
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

          <div className="text-center mt-16">
            <Button 
              asChild
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 py-6 px-10 rounded-xl shadow-lg shadow-blue-900/20 transition-all active:scale-95"
            >
              <Link href="/Projets" className="text-lg font-bold text-white">
                Voir toutes mes réalisations
              </Link>
            </Button>
          </div>
        </div>
      </section>
    );
}