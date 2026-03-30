'use client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin } from 'lucide-react';
import { SiGithub, SiLinkedin } from "react-icons/si";

export function ContactSection() {
  return (
    <section id="Contact" className="bg-gray-900 text-white py-24 px-4 md:px-8 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Contactez-moi</h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Une opportunité, une question ou simplement envie d'échanger sur un projet ? Je suis à votre écoute.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 shadow-xl">
            <h3 className='text-xl font-bold text-blue-400 mb-6 text-center italic'> Maintenance du formulaire en cours... </h3>
            <form className="space-y-6 opacity-50 pointer-events-none">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Nom complet</label>
                <Input id="name" type="text" className="bg-gray-700 border-gray-600 text-white" disabled />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email professionnel</label>
                <Input id="email" type="email" className="bg-gray-700 border-gray-600 text-white" disabled />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Votre message</label>
                <Textarea id="message" rows={5} className="bg-gray-700 border-gray-600 text-white" disabled />
              </div>
              <Button className="w-full bg-blue-600/50 cursor-not-allowed">Envoyer</Button>
            </form>
          </div>

          <div className="flex flex-col justify-center space-y-10">
            <div className="flex items-start space-x-5">
              <div className="bg-blue-600/20 p-4 rounded-xl">
                <Mail className="h-6 w-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">Email</h3>
                <a href="mailto:sandjygaudin51@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                  sandjygaudin51@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-5">
              <div className="bg-blue-600/20 p-4 rounded-xl">
                <MapPin className="h-6 w-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">Localisation</h3>
                <address className="text-gray-400 not-italic">Reims, Grand Est, France</address>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-800">
              <h3 className="text-xl font-bold mb-6">Retrouvez-moi sur</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/SandjyGAUDIN" 
                  target="_blank" 
                  className="bg-gray-800 p-4 rounded-xl hover:bg-blue-600 transition-all hover:-translate-y-1"
                  aria-label="Profil GitHub de Sandjy Gaudin"
                >
                  <SiGithub className="h-6 w-6" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/sandjy-gaudin-665525290/" 
                  target="_blank" 
                  className="bg-gray-800 p-4 rounded-xl hover:bg-blue-600 transition-all hover:-translate-y-1"
                  aria-label="Profil LinkedIn de Sandjy Gaudin"
                >
                  <SiLinkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}