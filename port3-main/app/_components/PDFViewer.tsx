// components/PDFViewer.tsx
'use client';

interface PDFViewerProps {
  filePath: string; // Chemin relatif depuis public/
  className?: string;
}

export default function PDFViewer({ filePath, className = '' }: PDFViewerProps) {
  return (
    <div className={`w-full ${className}`}>
      {/* Iframe principale */}
      <iframe
        src={`/${filePath}#view=fitH`}
        className="w-full h-full min-h-[70vh] border-none"
        title="Visualisateur PDF"
        loading="eager"
      />
      
      {/* Bouton de téléchargement */}
      <div className="mt-4 text-center">
        <a
          href={`/${filePath}`}
          download
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Télécharger le PDF
        </a>
      </div>
    </div>
  );
}