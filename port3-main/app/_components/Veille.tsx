'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const outilsVeille = [
  "Google Alerts",
  "Feedly",
  "YouTube",
  "sites d'informations (comme Le Monde Informatique, 01net, informatiqueNews.fr et d'autres)",
];

const articles = [
  {
    title: "L'IA générative, un atout pour la cybersécurité",
    date: "29/02/2024",
    source: "Le Monde",
    description: "Le Monde explore comment l'IA générative assiste les équipes de cyberdéfense en analysant de vastes volumes de données pour prévenir les intrusions et réagir efficacement aux attaques. Philippe Limantour, Directeur Technologie et Sécurité de Microsoft France, souligne que l'IA facilite et accélère la détection, le diagnostic et les mesures à mettre en place.",
    link: "https://www.lemonde.fr/creativite-et-transformation/article/2024/02/29/cybersecurite-comment-l-ia-renforce-la-protection-des-donnees_6219261_433.html",
    tags: ["IA", "Cybersécurité", "cyberdéfense"],
  },
  {
    title: "L'IA au service de la cybersécurité avec Exabeam",
    date: "07/04/2025",
    source: "Le Figaro",
    description: "Le Figaro présente la technologie d'Exabeam qui utilise l'IA pour associer automatiquement chaque événement suspect à des informations utiles, telles que l'utilisateur concerné, le type d'appareil, le lieu ou l'heure précise. Cette approche permet aux entreprises de bénéficier d'une visibilité enrichie et contextualisée, facilitant la compréhension rapide des incidents de sécurité.",
    link: "https://www.lefigaro.fr/economie/exabeam-l-intelligence-artificielle-au-service-de-la-cybersecurite-20250407",
    tags: ["IA", "Cybersécurité", "cyberdéfense"],
  },
  {
    title: "Le général Bonnemaison sur l'IA et la cyberdéfense",
    date: "18/11/2024",
    source: "Le Figaro",
    description: "Dans une interview accordée à Le Figaro, le général Bonnemaison affirme que l'intelligence artificielle est essentielle pour améliorer la cyberdéfense. Il souligne que l'État qui maîtrisera l'IA dominera probablement le cyberespace, mettant en avant l'importance stratégique de cette technologie dans les rivalités internationales.",
    link: "https://www.lefigaro.fr/international/general-bonnemaison-l-intelligence-artificielle-permettra-d-ameliorer-notre-cyberdefense-20241118",
    tags: ["IA", "Cybersécurité", "cyberdéfense"],
  },
  {
    title: "Le cyber au cœur des armées et des services de renseignement",
    date: "16/04/2023",
    source: "BFMtv",
    description: "BFMTV rapporte que le ministre des Armées a intégré le cyber au cœur de la nouvelle loi de programmation militaire, avec un budget de 4 milliards d'euros. Cet effort vise à renforcer les capacités des armées et des services de renseignement, en mettant l'accent sur les technologies avancées, y compris l'intelligence artificielle, pour prévoir, obtenir du renseignement et prendre des décisions rapides et sûres.",
    link: "https://www.bfmtv.com/economie/entreprises/defense/comment-le-cyber-entre-au-coeur-des-armees-et-des-services-de-renseignement_AN-202304160132.html",
    tags: ["IA", "Cybersécurité", "cyberdéfense"],
  },
  {
    title: "L'IA et la démocratisation de la cybercriminalité",
    date: "16/01/2023",
    source: "France24",
    description: "France 24 examine comment des outils comme ChatGPT peuvent être détournés par des cybercriminels pour faciliter leurs activités. Par exemple, un cybercriminel peut demander à ChatGPT d'écrire un mail comme s'il était un chirurgien communiquant avec un collègue, rendant les attaques de phishing plus convaincantes.",
    link: "https://www.france24.com/fr/éco-tech/20230116-l-intelligence-artificielle-chatgpt-et-la-démocratisation-de-la-cybercriminalité",
    tags: ["IA", "Cybersécurité", "cyberdéfense"],
  },
  {
    title: "Rapport d'activité 2024 de Cybermalveillance.gouv.fr",
    date: "25/03/2025",
    source: "Cybermalveillance.gouv.fr",
    description: "Le rapport d'activité 2024 de Cybermalveillance.gouv.fr souligne que l'intelligence artificielle représente des risques croissants, notamment en facilitant certaines cyberattaques. Cependant, l'IA est également perçue comme une opportunité pour aider le public à mieux identifier les menaces et s'en protéger.",
    link: "https://www.cybermalveillance.gouv.fr/medias/2025/03/250403_RA_2024_SCREEN.pdf",
    tags: ["IA", "Cybersécurité", "cyberdéfense"],
  },
  {
    title: "Les états-majors militaires dans la boucle de l'IA",
    date: "09/02/2025",
    source: "Le Figaro",
    description: "Le Monde rapporte que, bien que l'IA soit au centre des discussions en cybersécurité, elle n'a pas eu l'effet révolutionnaire attendu. Elle est utile pour détecter des logiciels malveillants et analyser des masses de données, mais ne remplace pas encore le jugement humain. Les experts insistent sur l'importance de la certification de l'IA et la détection des attaques contre elle.",
    link: "https://www.lefigaro.fr/international/les-etats-majors-militaires-dans-la-boucle-de-l-intelligence-artificielle-20250209",
    tags: ["IA", "Cybersécurité", "cyberdéfense"],
  },
];

export default function VeilleTechnologique() {
  return (
    <div className="min-h-screen p-10 bg-gray-900 text-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Veille Technologique</h2>

      {/* Outils de veille */}
      <section className="max-w-4xl mx-auto mb-16">
        <h3 className="text-2xl font-semibold mb-6 text-center">Outils de veille utilisés</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {outilsVeille.map((outil, idx) => (
            <span 
              key={idx}
              className="px-4 py-2 bg-blue-900/50 text-blue-300 rounded-full text-sm"
            >
              {outil}
            </span>
          ))}
        </div>
      </section>

      {/* Question centrale */}
      <section className="bg-gray-800 p-8 rounded-xl shadow-md border border-gray-700 max-w-4xl mx-auto mb-16">
        <h3 className="text-2xl font-semibold mb-4 text-center">Problématique</h3>
        <p className="text-lg text-gray-300 text-center">
        &quot;Comment l&apos;Intelligence Artificielle est un soutien à la cyberdéfense et pourquoi l&apos;utilise t-on ?&quot;
        </p>
      </section>

      {/* Articles récents */}
      <section className="max-w-7xl mx-auto mb-16">
        <h3 className="text-2xl font-semibold mb-8 text-center">Articles que j&apos;ai sélectionnés</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, idx) => (
            <a 
              key={idx}
              href={article.link}
              className="group block transition-transform hover:scale-105"
            >
              <Card className="h-full bg-gray-800 border-gray-700 overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-white text-xl">{article.title}</CardTitle>
                  <div className="flex items-center text-sm text-gray-400 gap-2 mt-2">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.source}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{article.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag, tagIdx) => (
                      <span 
                        key={tagIdx} 
                        className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </section>

      {/* Conclusion */}
      <section className="bg-gray-800 p-8 rounded-xl shadow-md border border-gray-700 max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold mb-4 text-center">Conclusion</h3>
        <p className="text-gray-300 mb-4">
        L&apos;intelligence artificielle (IA) est devenue un soutien incontournable pour la cyberdéfense, tant dans le secteur militaire que civil. </p>
        <p className="text-gray-300 mb-4">Elle permet aujourd&apos;hui de renforcer la détection des menaces en analysant en temps réel d&apos;énormes volumes de données, ce qui est humainement impossible à traiter avec la même vitesse et précision. Grâce à des outils intelligents comme ceux développés par Exabeam ou les assistants virtuels type CyberAlly, l&apos;IA automatise la reconnaissance des incidents, contextualise les attaques et recommande des actions rapides et adaptées. </p>

        <p className="text-gray-300 mb-4"> L&apos;usage de l&apos;IA en cyberdéfense est motivé par plusieurs besoins critiques : </p>
        <ul>
          <li> Accélérer la réponse face aux attaques pour limiter les dégâts.</li>
          <li>Renforcer la prédiction des risques en identifiant des signaux faibles.</li>
          <li>Compenser le manque de personnels qualifiées dans la cybersécurité.</li>
          <li>Accéder à des informations précises et contextuelles pour prendre des décisions plus adaptées.</li>
          <li>Maintenir un avantage stratégique face à des adversaires qui, eux aussi, utilisent l&apos;IA pour sophistiquer leurs cyberattaques.</li>
        </ul>
<p className="text-gray-300">
Toutefois, l&apos;IA n&apos;est pas seulement un outil de défense : elle est aussi devenue un vecteur de nouvelles menaces, en facilitant la production d&apos;attaques personnalisées (phishing, malware adaptatif, etc.).</p>
<p className="text-gray-300">Cela oblige les acteurs de la cyberdéfense à innover en permanence pour maîtriser cette double lame technologique. </p>
<p className="text-gray-300">

En résumé, l&apos;IA est utilisée car elle augmente la vitesse, l&apos;efficacité et la pertinence de la cyberdéfense face à des menaces toujours plus rapides, complexes et massives. Son adoption n&apos;est plus une option, mais une nécessité pour assurer la sécurité des infrastructures critiques, des entreprises et des États.
        </p>
        <p className="text-gray-300">
          En continuant cette veille, je pourrai mieux intégrer ces nouveautés dans mes projets pour améliorer la qualité et la robustesse des applications développées.
        </p>
      </section>
    </div>
  );
}
