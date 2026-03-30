'use client';

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

        {/* Colonne Droite : Texte introductif */}
        <div className="md:w-2/3 space-y-8">
          <h2 className="text-4xl font-bold text-white tracking-tight">À propos de moi</h2> 
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              Actuellement étudiant en <strong>BUT Informatique</strong> (parcours A : Réalisation d&apos;applications) à l&apos;IUT de Reims, je me spécialise dans le développement <strong>C# .NET</strong> et les technologies <strong>Web modernes</strong>.
            </p>
            <p>
              Mon approche repose sur la création de solutions logicielles personnalisées, robustes et centrées sur l&apos;utilisateur. Passionné par l&apos;architecture logicielle, j&apos;aime transformer des besoins complexes en interfaces simples et efficaces.
            </p>
          </div>
        </div>
      </div>

      {/* SECTION : QU'EST-CE QUE LE BUT INFORMATIQUE (Réintégrée) */}
      <div className="max-w-4xl mx-auto mt-12 px-6">
        <h3 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-2">
          Qu&apos;est-ce que le BUT Informatique ?
        </h3>
        
        <div className="text-gray-300 space-y-4 leading-relaxed">
          <p>
            Diplôme professionnel de niveau 6 (bac + 3), le BUT informatique forme à la conception, la réalisation et la mise en œuvre de solutions informatiques répondant aux besoins de transformation numérique des entreprises. La formation transmet des savoirs fondamentaux en développement informatique et Web, dans les langages de programmation les plus utilisés, dans l’administration des systèmes et réseaux, dans les bases de données et en conduite de projets.
          </p>
          <p>
            Le parcours réalisation d’applications - conception, développement, validation (parcours A) forme des informaticiens cadres intermédiaires en informatique. Les élèves acquièrent les compétences nécessaires pour développer des applications complexes, en réaliser la maintenance ou le suivi. Ils apprennent à mettre en place des tests, à automatiser leur exécution et à assurer l’intégration continue des applications. Ces dernières peuvent concerner des plateformes spécifiques (Web, mobile, Iot…) et des domaines variés (finance, santé, jeu vidéo…). Après le BUT, les débouchés se situent principalement dans les entreprises et autres organisations (entreprise de services du numérique, ESN, télécommunications, banques, assurances, grande distribution, plateformes de e-commerce, industries, services publics, éditeurs de logiciels…).
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-20 px-6 space-y-16">
        
        {/* SECTION : PARCOURS PROFESSIONNEL */}
        <div className="bg-gray-800/30 border border-gray-800 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                <span className="w-8 h-1 bg-blue-600 rounded-full"></span>
                Expériences Professionnelles
            </h3>
            
            <div className="space-y-12">
                {/* Expérience 2024-2025 */}
                <div className="relative pl-8 border-l-2 border-blue-500/30">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-600 rounded-full shadow-[0_0_10px_#2563eb]"></div>
                    <span className="text-blue-400 text-sm font-bold uppercase tracking-wider">2024 - 2025</span>
                    <h4 className="text-xl font-bold text-white mt-1">Stage Développeur - LICIIS (URCA)</h4>
                    <p className="text-gray-400 mb-3 underline decoration-dotted">Reims, France</p>
                    <p className="text-gray-300 leading-relaxed">
                        Mise en place et personnalisation d&apos;une instance <strong>WorkAdventure</strong>. Rédaction du cahier des charges, correction de bugs et déploiement sur serveurs locaux.
                    </p>
                </div>

                {/* Expérience 2023-2024 */}
                <div className="relative pl-8 border-l-2 border-blue-500/30">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-gray-700 rounded-full"></div>
                    <span className="text-gray-500 text-sm font-bold uppercase tracking-wider">2023 - 2024</span>
                    <h4 className="text-xl font-bold text-white mt-1">Stage Développement WEB - LICIIS (URCA)</h4>
                    <p className="text-gray-300 leading-relaxed">
                        Création d&apos;un site vitrine sous <strong>WordPress</strong>. Développement de deux plugins PHP sur-mesure pour l&apos;intégration de flux de recherche (API HAL) et réseaux sociaux.
                    </p>
                </div>
            </div>
        </div>

        {/* SECTION : PARCOURS SCOLAIRE */}
        <div className="bg-gray-800/30 border border-gray-800 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                <span className="w-8 h-1 bg-green-500 rounded-full"></span>
                Parcours Scolaire
            </h3>
            
            <div className="space-y-12">
                {/* BUT Informatique */}
                <div className="relative pl-8 border-l-2 border-green-500/30">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-green-500 rounded-full shadow-[0_0_10px_#22c55e]"></div>
                    <span className="text-green-400 text-sm font-bold uppercase tracking-wider">2025 - 2026 (En cours)</span>
                    <h4 className="text-xl font-bold text-white mt-1 underline underline-offset-4 decoration-blue-500">BUT Informatique - IUT de Reims</h4>
                    <p className="text-gray-300 mt-2">
                        Parcours <strong>Réalisation d&apos;applications</strong> : conception, développement et validation. Spécialisation web et logiciel.
                    </p>
                    <a href="https://www.iut-rcc.fr" target="_blank" className="text-xs text-blue-400 hover:underline mt-2 inline-block">Consulter le site de l&apos;école →</a>
                </div>

                {/* BTS SIO */}
                <div className="relative pl-8 border-l-2 border-green-500/30">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-gray-700 rounded-full"></div>
                    <span className="text-gray-500 text-sm font-bold uppercase tracking-wider">2023 - 2025</span>
                    <h4 className="text-xl font-bold text-white mt-1">BTS SIO Option SLAM</h4>
                    <p className="text-gray-400">Lycée Honoré d&apos;Estienne d&apos;Orves, Nice</p>
                    <p className="text-gray-300 mt-2">
                        Solutions Logicielles et Applications Métiers. Apprentissage des fondamentaux du développement, de la gestion de base de données et de l&apos;algorithmie.
                    </p>
                    <a href="https://www.lyc-honore-d-estienne-d-orves.ac-nice.fr" target="_blank" className="text-xs text-blue-400 hover:underline mt-2 inline-block">Consulter le site de l&apos;école →</a>
                </div>

                {/* Bac STI2D */}
                <div className="relative pl-8 border-l-2 border-green-500/30">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-gray-700 rounded-full"></div>
                    <span className="text-gray-500 text-sm font-bold uppercase tracking-wider">2023</span>
                    <h4 className="text-xl font-bold text-white mt-1">Baccalauréat STI2D</h4>
                    <p className="text-gray-400">Lycée Franklin Roosevelt, Reims</p>
                    <p className="text-gray-300 mt-2 text-sm">
                        Spécialité Systèmes d&apos;Information et Numérique (SIN). Obtenu avec mention.
                    </p>
                    <a href="https://lycee-roosevelt-reims.fr" target="_blank" className="text-xs text-blue-400 hover:underline mt-2 inline-block">Consulter le site de l&apos;école →</a>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
}