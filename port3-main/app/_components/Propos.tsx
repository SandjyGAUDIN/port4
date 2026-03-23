'use client';

export default function Propos() {
  return (
    <div className="min-h-screen p-4 bg-gray-900 text-gray-100">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <div className="sticky top-6">
            <iframe
              src="/documents/Sandjy_CV.pdf#view=fitH&zoom=85"
              className="w-full h-[30vh] border border-gray-700 rounded-lg shadow-lg" 
              title="CV Sandjy Gaudin" 
            />
            <div className="mt-3 text-center">
              <a
                href="/documents/Sandjy_CV.pdf"
                download="Sandjy_CV.pdf"
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors" 
              >
                Télécharger le CV
              </a>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 space-y-8">
          <h2 className="text-3xl font-bold text-white mb-6">À propos de moi</h2> 
          <div className="space-y-6 text-gray-300">
            <p className="leading-relaxed">
              Actuellement étudiant en BUT Informatique option C# et WEB à l&apos;IUT de Reims.
            </p>
            <p className="leading-relaxed">
              Passionné d&apos;informatique et de développement, je suis un futur développeur de solutions logiciels personalisées.
            </p>
            <p>
              Pour toutes recommandations et conseils, n&apos;hésitez pas à me contacter.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-12 px-4">
        <h3 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-2">
          Qu&apos;est-ce que le BUT Informatique ?
        </h3>
        
        <p>Diplôme professionnel de niveau 6 (bac + 3), le BUT informatique forme à la conception, la réalisation et la mise en œuvre de solutions informatiques répondant aux besoins de transformation numérique des entreprises. La formation transmet des savoirs fondamentaux en développement informatique et Web, dans les langages de programmation les plus utilisés, dans l’administration des systèmes et réseaux, dans les bases de données et en conduite de projets.</p>
        <br/>
        <p>Le parcours réalisation d’applications - conception, développement, validation (parcours A) forme des informaticiens cadres intermédiaires en informatique. Les élèves acquièrent les compétences nécessaires pour développer des applications complexes, en réaliser la maintenance ou le suivi. Ils apprennent à mettre en place des tests, à automatiser leur exécution et à assurer l’intégration continue des applications. Ces dernières peuvent concerner des plateformes spécifiques (Web, mobile, Iot…) et des domaines variés (finance, santé, jeu vidéo…). Après le BUT, les débouchés se situent principalement dans les entreprises et autres organisations (entreprise de services du numérique, ESN, télécommunications, banques, assurances, grande distribution, plateformes de e-commerce, industries, services publics, éditeurs de logiciels…).</p>
      </div>

      
      {/* Section Parcours Professionnel */}
      <div className="max-w-4xl mx-auto mt-12 px-4">
        <h3 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-2">
          Mon parcours
        </h3>
        <h4 className="text-xl font-semibold text-blue-400 mb-4">
          Mes expériences Professionnelles
        </h4>

        <div className="space-y-6">
            {/* Expérience 2 */}
            <div className="border-l-4 border-blue-500 pl-4">
                <h5 className="text-lg font-medium text-white">Stage 2ème année BTS SIO 2024-2025 : LICIIS (Laboratoire Informatique en Calcul Intensif et Imagerie pour la Simulation) à l&apos;URCA (Université de Reims Champagne Ardennes) à Reims</h5>
                <p className="text-gray-300">Mise en place d&apos;une instance WorkAdventure sur leurs serveurs en local, Correction de cette instance avec documentation, création d&apos;un cahier des charges pour les fonctionnnalités demandées par le laboratoire, création et mise en place des demandes.</p>
            </div>
            <div className="h-px bg-gray-700 my-4"></div>
          {/* Expérience 1 */}
          <div className="border-l-4 border-blue-500 pl-4">
            <h5 className="text-lg font-medium text-white">
              Stage 1er année BTS SIO 2023-2024 : LICIIS (Laboratoire Informatique en Calcul Intensif et Imagerie pour la Simulation) a l&apos;URCA (Université de Reims Champagne Ardennes) à Reims

            </h5>
            <p className="text-gray-400">LICIIS, Reims 51100</p>
            <p className="italic text-gray-300 mt-1">Création d&apos;un cahier des charges pour le site web, création d&apos;un site web avec le CMS WordPress et programmation de 2 plugins WordPress (1 pour les réseaux sociaux et 1 pour HAL), enfin mise en place sur leurs serveurs en local.</p>
          </div>

          <div className="h-px bg-gray-700 my-4"></div>

            <p className="text-gray-400">2023 - 2025</p>
          </div>
      </div>

      {/* Section Parcours Scolaire */}
      <div className="max-w-4xl mx-auto mt-12 px-4">
        <h4 className="text-xl font-semibold text-blue-400 mb-4">
          Mon Parcours Scolaire
        </h4>

        <div className="space-y-6">
          {/* Dates */}
          <p className="text-gray-400">2023 - 2026</p>

          <div className="h-px bg-gray-700 my-4"></div>

          <div className="border-l-4 border-blue-500 pl-4">
            <h5 className="text-lg font-medium text-white">
              IUT de Reims, Reims, France
            </h5>
            <p className="text-gray-300">BUT Informatique parcours REAL 2ème année 2025-2026</p>
            <p className="text-gray-400 mt-1">
              Parcours réalisation d&apos;applications - conception, développement, validation.
            </p>
          </div>

          <div className="h-px bg-gray-700 my-4"></div>

          {/* Lien Site école */}
          <p className="text-blue-400 hover:text-blue-300 cursor-pointer">
            <a 
              href="https://www.iut-rcc.fr" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              site école
            </a>
          </p>

          <div className="h-px bg-gray-700 my-4"></div>

          {/* Formation 1 */}
          <div className="border-l-4 border-blue-500 pl-4">
            <h5 className="text-lg font-medium text-white">
              Lycée Honoré d&apos;Estienne d&apos;Orve, Nice, France
            </h5>
            <p className="text-gray-300">BTS SIO (Services Informatiques aux Organisations) 2023-2025</p>
            <p className="text-gray-400 mt-1">
              Options B, Solutions Logicielles et Applications Métiers.
            </p>
          </div>

          <div className="h-px bg-gray-700 my-4"></div>

          {/* Lien Site école */}
          <p className="text-blue-400 hover:text-blue-300 cursor-pointer">
            <a 
              href="https://www.lyc-honore-d-estienne-d-orves.ac-nice.fr" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              site école
            </a>
          </p>

          <div className="h-px bg-gray-700 my-4"></div>

          {/* Formation 2 */}
          <div className="border-l-4 border-blue-500 pl-4">
            <h5 className="text-lg font-medium text-white">
              Lycée Franklin Roosevelt, Reims, France
            </h5>
            <p className="text-gray-300">
              Seconde Générale et 1er/Terminal technologique STI2D SIN.
            </p>
            <p className="text-gray-400">
              Spécialité Systèmes dinformation et du numérique.
            </p>
            <p className="text-gray-300 mt-2">
              Bac obtenue en 2023 avec mention.
            </p>
          </div>

          <p className="text-blue-400 hover:text-blue-300 cursor-pointer">
            <a 
              href="https://lycee-roosevelt-reims.fr" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              site école
            </a>
          </p>

          <div className="h-px bg-gray-700 my-4"></div>
        </div>
      </div>
    </div>
  );
}