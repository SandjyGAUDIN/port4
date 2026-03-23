'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Propos() {
  return (
    <div className="min-h-screen p-4 bg-gray-900 text-gray-100">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8">

        {/* LEFT */}
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
                Télécharger le PDF
              </a>
            </div>

            <div className="flex space-x-4 mt-4">
              <a href="https://github.com/SandjyGAUDIN" className="text-gray-400 hover:text-white">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/sandjy-gaudin-665525290/" className="text-gray-400 hover:text-white">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="md:w-1/2 space-y-8">
          <h2 className="text-3xl font-bold text-white mb-6">À propos de moi</h2>

          <div className="space-y-6 text-gray-300">
            <p>Actuellement étudiant en BUT Informatique option C# et WEB à l'IUT de Reims.</p>
            <p>Passionné d'informatique et de développement, je suis un futur développeur de solutions logicielles personnalisées.</p>
            <p>Pour toutes recommandations et conseils, n'hésitez pas à me contacter.</p>
          </div>
        </div>

      </div>

      {/* SECTION BUT */}
      <div className="max-w-4xl mx-auto mt-12 px-4">
        <h3 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-2">
          Qu'est-ce que le BUT Informatique parcours REAL ?
        </h3>

        <p className="text-gray-300">
          Diplôme professionnel de niveau 6 (bac +3), le BUT informatique forme à la conception et au développement de solutions informatiques.
        </p>

        <p className="text-gray-300 mt-4">
          Le parcours REAL forme des développeurs capables de créer, maintenir et tester des applications complexes.
        </p>
      </div>

      {/* PARCOURS PRO */}
      <div className="max-w-4xl mx-auto mt-12 px-4">
        <h3 className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-2">
          Mon parcours
        </h3>

        <div className="space-y-6">

          <div className="border-l-4 border-blue-500 pl-4">
            <h5 className="text-white">
              Stage BTS SIO – LICIIS (URCA)
            </h5>
            <p className="text-gray-400">Reims</p>
            <p className="text-gray-300">
              Création site WordPress + plugins + déploiement local.
            </p>
          </div>

          <div className="border-l-4 border-blue-500 pl-4">
            <h5 className="text-white">
              Stage BTS SIO 2e année – LICIIS
            </h5>
            <p className="text-gray-300">
              Mise en place WorkAdventure + documentation + corrections.
            </p>
          </div>

        </div>
      </div>

      {/* PARCOURS SCOLAIRE */}
      <div className="max-w-4xl mx-auto mt-12 px-4">
        <h4 className="text-xl font-semibold text-blue-400 mb-4">
          Mon parcours scolaire
        </h4>

        <div className="space-y-6">

          <div className="border-l-4 border-blue-500 pl-4">
            <h5 className="text-white">IUT de Reims</h5>
            <p>BUT Informatique</p>
          </div>

          <div className="border-l-4 border-blue-500 pl-4">
            <h5 className="text-white">Lycée Honoré d'Estienne d'Orves</h5>
            <p>BTS SIO</p>
          </div>

          <div className="border-l-4 border-blue-500 pl-4">
            <h5 className="text-white">Lycée Roosevelt</h5>
            <p>Bac STI2D SIN</p>
          </div>

        </div>
      </div>

    </div>
  );
}