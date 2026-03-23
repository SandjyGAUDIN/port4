import { Header } from "./_components/Header";
import Hero from "./_components/Hero";
import Propos from "./_components/Propos"; 
import { Skills } from "./_components/Competences";
import E5  from "./_components/E5";
import { Footer } from "./_components/Footer";
import { ContactSection } from "./_components/Contact";


export default function Home() {
  return (
  <main>
    <Header />

    <section id="Accueil">
    <Hero />
    </section>
    <section id="Propos">
    <Propos />
    </section>
    <section id="Competences">
    <Skills />
    </section>
    <section id="E5">
    <E5 />
    </section>
    <section id="Contact">
    <ContactSection />
    </section>
    <Footer />
  </main>
  );
}
