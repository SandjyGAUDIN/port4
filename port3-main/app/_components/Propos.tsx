'use client';
import { Section } from "./Section"; // Réutilise ton composant de structure si tu en as un

export default function Propos() {
  return (
    <section id="Propos" className="min-h-screen py-24 bg-gray-900 text-gray-100">
      <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row gap-12">
        {/* Colonne Gauche : CV */}
        <div className="md:w-1/3">
          <div className="sticky top-24">
            <div className="relative group">
               <iframe
                src="/documents/Sandjy_CV.pdf#view=fitH&zoom=85"
                className="w-full h-[400px] border border-gray-700 rounded-xl shadow-2xl" 
                title="CV de Sandjy Gaudin - Développeur Fullstack" 
              />
              <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-xl"></div>
            </div>
            <div className="mt-4 text-center">
              <a
                href="/documents/Sandjy_CV.pdf"
                download="CV_Sandjy_Gaudin.pdf"
                className="inline-flex items-center text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors bg-blue-400/10 px-4 py-2 rounded-full" 
              >
                📥 Télécharger le CV (PDF)
              </a>
            </div>
          </div>
        </div>

        {/* Colonne Droite : Texte */}
        <div className="md:w-2/3 space-y-8">
          <h2 className="text-4xl font-bold text-white tracking-tight">À propos de moi</h2> 
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              Actuellement étudiant en <strong>BUT Informatique</strong> (parcours A : Réalisation d'applications) à l'IUT de Reims, je me spécialise dans le développement <strong>C# .NET</strong> et les technologies <strong>Web modernes</strong>.
            </p>
            <p>
              Mon approche repose sur la création de solutions logicielles personnalisées, robustes et centrées sur l'utilisateur. Passionné par l'architecture logicielle, j'aime transformer des besoins complexes en interfaces simples et efficaces.
            </p>
          </div>
        </div>
      </div>

      {/* Détails Parcours */}
      <div className="max-w-4xl mx-auto mt-20 px-6">
        <div className="bg-gray-800/30 border border-gray-800 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-8 h-1 bg-blue-600 rounded-full"></span>
                Mon Parcours Professionnel
            </h3>
            
            <div className="space-y-12">
                {/* Expérience LICIIS 2 */}
                <div className="relative pl-8 border-l-2 border-blue-500/30">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-600 rounded-full shadow-[0_0_10px_#2563eb]"></div>
                    <span className="text-blue-400 text-sm font-bold uppercase tracking-wider">2024 - 2025</span>
                    <h4 className="text-xl font-bold text-white mt-1">Stage Développeur - LICIIS (URCA)</h4>
                    <p className="text-gray-400 mb-3">Reims, France</p>
                    <p className="text-gray-300 leading-relaxed">
                        Mise en place et personnalisation d'une instance <strong>WorkAdventure</strong>. Rédaction du cahier des charges, correction de bugs et déploiement sur serveurs locaux.
                    </p>
                </div>

                {/* Expérience LICIIS 1 */}
                <div className="relative pl-8 border-l-2 border-blue-500/30">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-gray-700 rounded-full"></div>
                    <span className="text-gray-500 text-sm font-bold uppercase tracking-wider">2023 - 2024</span>
                    <h4 className="text-xl font-bold text-white mt-1">Stage Webmaster - LICIIS (URCA)</h4>
                    <p className="text-gray-300 leading-relaxed">
                        Création d'un site institutionnel sous <strong>WordPress</strong>. Développement de deux plugins PHP sur-mesure (Intégration API HAL et Réseaux Sociaux).
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}