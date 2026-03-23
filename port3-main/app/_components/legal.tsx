'use client';
import { useState } from 'react';

export default function LegalModal() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => setIsOpen(!isOpen);

    return (
        <>
            {/* Le déclencheur (à placer dans ton footer ou menu) */}
            <button
                onClick={toggleModal}
                className="text-sm text-gray-400 hover:text-blue-400 transition-colors underline decoration-dotted"
            >
                Mentions légales
            </button>

            {/* Overlay et Modal */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                    <div className="bg-gray-900 border border-gray-700 w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-xl shadow-2xl">

                        {/* Header */}
                        <div className="sticky top-0 bg-gray-900 border-b border-gray-700 p-4 flex justify-between items-center">
                            <h2 className="text-xl font-bold text-white">Mentions Légales</h2>
                            <button
                                onClick={toggleModal}
                                className="text-gray-400 hover:text-white text-2xl"
                            >
                                &times;
                            </button>
                        </div>

                        {/* Contenu */}
                        <div className="p-6 space-y-6 text-gray-300 text-sm leading-relaxed">

                            <section>
                                <h3 className="text-blue-400 font-semibold mb-2 uppercase text-xs tracking-widest">Éditeur du site</h3>
                                <p>
                                    <span className="text-white">Nom :</span> Sandjy Gaudin<br />
                                    <span className="text-white">Statut :</span> Étudiant en BUT Informatique<br />
                                    <span className="text-white">Contact :</span> sandjygaudin51@gmail.com <br />
                                    <span className="text-white">Localisation :</span> Reims, France
                                </p>
                            </section>

                            <section>
                                <h3 className="text-blue-400 font-semibold mb-2 uppercase text-xs tracking-widest">Hébergement</h3>
                                <p>
                                    Ce site est hébergé par <span className="text-white">Vercel Inc.</span><br />
                                    Adresse : 340 S Lemon Ave #4133 Walnut, CA 91789, USA.<br />
                                    Plateforme : https://vercel.com
                                </p>
                            </section>

                            <section>
                                <h3 className="text-blue-400 font-semibold mb-2 uppercase text-xs tracking-widest">Données personnelles (RGPD)</h3>
                                <p>
                                    Conformément au Règlement Général sur la Protection des Données (RGPD), les informations recueillies via le formulaire de contact (nom, email, message) sont :
                                </p>
                                <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-400">
                                    <li>Utilisées exclusivement pour répondre à vos demandes de contact.</li>
                                    <li>Conservées pour une durée maximale de 12 mois.</li>
                                    <li>Ne sont jamais cédées ou vendues à des tiers.</li>
                                </ul>
                                <p className="mt-2">
                                    Vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données en me contactant directement par email.
                                </p>
                            </section>

                            <section>
                                <h3 className="text-blue-400 font-semibold mb-2 uppercase text-xs tracking-widest">Propriété intellectuelle</h3>
                                <p>
                                    Le contenu du site (textes, design, structure) est la propriété de Sandjy Gaudin.
                                    Les logos des écoles et entreprises citées restent la propriété de leurs détenteurs respectifs.
                                </p>
                            </section>

                        </div>

                        {/* Footer Modal */}
                        <div className="p-4 border-t border-gray-700 text-right">
                            <button
                                onClick={toggleModal}
                                className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md transition-colors text-sm"
                            >
                                Fermer
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}