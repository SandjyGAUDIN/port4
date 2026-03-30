'use client';

import { Header } from '../_components/Header';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Footer } from '../_components/Footer';

// Note : Dans Next.js App Router, les metadata se mettent normalement dans un fichier 
// layout.tsx ou page.tsx (version serveur). Comme c'est un "use client", 
// assure-toi d'avoir les métadonnées dans ton layout parent.

export default function ProjetsPage() {
  const projects = [
    {
      title: "La Forme By Sport",
      description: "Plateforme complète de gestion de salle de sport développée en Java JEE. Inclut la gestion des abonnements, des plannings et des inscriptions.",
      image: "/Images/essaie_image_perso.png",
      link: "#",
      Tags: "JEE, Java, MVC, Méthode Agile, GitHub, Jira, MariaDB",
      alt: "Interface du logiciel La Forme By Sport - Gestion de salle de sport par Sandjy Gaudin"
    },
    {
      title: "BiblioNice",
      description: "Application Web de gestion de bibliothèque réalisée avec Laravel. Système de catalogue, gestion des emprunteurs et suivi des retours.",
      image: "/Images/Laravel.png",
      link: "#",
      Tags: "PHP, Laravel, MVC, Méthode Agile, GitLab, MariaDB",
      alt: "Application Web BiblioNice réalisée avec le framework Laravel"
    },
    {
      title: "WorkAdventure",
      description: "Déploiement et personnalisation d'un bureau virtuel immersif OpenSource pour le laboratoire LICIIS. Adaptation des maps et des fonctionnalités.",
      image: "/Images/WorkAdventure.png",
      link: "#",
      Tags: "TypeScript, GitHub, Méthode Agile, Cahier des charges",
      alt: "Capture d'écran de l'instance WorkAdventure personnalisée par Sandjy Gaudin"
    },
    {
      title: "WordPress LIICIS",
      description: "Refonte du site web du laboratoire LICIIS. Développement de plugins PHP sur-mesure pour l'intégration de flux de recherche (HAL).",
      image: "/Images/Liciis.png",
      link: "#",
      Tags: "WordPress, PHP, HTML, CSS, JavaScript, Cahier des charges",
      alt: "Site WordPress institutionnel du laboratoire LICIIS"
    },
    {
      title: "Portfolio Professionnel",
      description: "Conception et développement de ce portfolio en Next.js. Optimisation SEO, performance et interface utilisateur moderne avec Tailwind CSS.",
      image: "/Images/Portfolio.png",
      link: "#",
      Tags: "Next.js, Tailwind CSS, TypeScript, Vercel, GitHub",
      alt: "Aperçu du portfolio développeur de Sandjy Gaudin"
    },
    {
      title: "Gestion de Service Personnel",
      description: "Application desktop robuste développée en C# pour la gestion administrative du personnel et des services en entreprise.",
      image: "/Images/Csharp.png",
      link: "#",
      Tags: "C#, GitHub, MySQL, .NET",
      alt: "Application desktop de gestion en C# et MySQL"
    },
  ];

  return (
    <>
      {/* Balise de titre pour le navigateur (SEO) */}
      <title>Réalisations & Projets Informatiques | Sandjy Gaudin</title>
      <meta name="description" content="Découvrez les projets de Sandjy Gaudin : applications Java JEE, sites Laravel, développements C# et solutions Web sur-mesure à Reims." />

      <Header />
      <main className="min-h-screen bg-gray-900 text-white">
        <section className="py-16 container mx-auto px-4" aria-labelledby="page-title">
          <header className="max-w-3xl mx-auto text-center mb-16">
            <h1 id="page-title" className="text-4xl md:text-5xl font-bold mb-4">
              Mes Réalisations Informatiques
            </h1>
            <p className="text-gray-400 text-lg">
              Une sélection de projets académiques et professionnels illustrant mes compétences en développement logiciel et web.
            </p>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
            {projects.map((project, index) => (
              <article key={index} className="h-full">
                <Card 
                  className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-all duration-300 h-full flex flex-col group shadow-lg overflow-hidden"
                >
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.alt} // Utilisation du texte alternatif spécifique
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      priority={index < 2} // Charge les 2 premières images plus vite
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl text-blue-400">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col">
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {project.Tags && (
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.Tags.split(', ').map((tag, i) => (
                          <span 
                            key={i} 
                            className="px-3 py-1 bg-gray-700 text-blue-300 border border-blue-500/30 rounded-md text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}