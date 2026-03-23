'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin } from 'lucide-react';

import { 
    SiGithub, SiLinkedin,
  } from "react-icons/si";

export function ContactSection() {
  /* const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  }; */

  return (
    <section id="contact" className="bg-gray-900 text-white py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Contactez-moi</h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Vous avez une suggestion ou une question ? Envoyez-moi un message et je vous répondrai dès que possible.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulaire */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className='text-2xl font-bold text-center mb-4'> En cours de maintenance... Merci de ne pas utiliser le formulaire. </h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Nom</label>
                <Input
                  id="name"
                  type="text"
                 /* value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})} */
                  className="bg-gray-700 border-gray-600 text-white"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <Input
                  id="email"
                  type="email"
                 /* value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})} */
                  className="bg-gray-700 border-gray-600 text-white"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <Textarea
                  id="message"
                  rows={5}
                 /* value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})} */
                  className="bg-gray-700 border-gray-600 text-white"
                  required
                />
              </div>

              <Button
                type="submit"
                // disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700"
              >
              </Button>
            </form>
          </div>

          {/* Informations de contact */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 p-3 rounded-full">
                <Mail className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Email</h3>
                <p className="text-gray-400">sandjygaudin51@email.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 p-3 rounded-full">
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Localisation</h3>
                <p className="text-gray-400">Nice, France</p>
              </div>
            </div>

            <div className="pt-8">
              <h3 className="text-xl font-semibold mb-4">Réseaux sociaux</h3>
              <div className="flex space-x-4">
                <a 
                href="https://github.com/SandjyGAUDIN" 
                target="_blank" 
                rel="Github Sandjy GAUDIN"
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-colors"
                aria-label="GitHub"
                >
                <SiGithub className="h-5 w-5" />
                </a>
                <a 
                href="https://www.linkedin.com/in/sandjy-gaudin-665525290/" 
                target="_blank" 
                rel="linkedin Sandjy GAUDIN"
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-colors"
                aria-label="LinkedIn"
                >
                <SiLinkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}