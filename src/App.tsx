import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { StatsSection } from "./components/sections/StatsSection";
import { ProblemSolution } from "./components/sections/ProblemSolution";
import { Services } from "./components/sections/Services";
import { Process } from "./components/sections/Process";
import { Portfolio } from "./components/sections/Portfolio";
import { Pricing } from "./components/sections/Pricing";
import { ContactForm } from "./components/sections/ContactForm";

export default function App() {
  return (
    <div className="bg-noise min-h-screen">
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <StatsSection />
        <ProblemSolution />
        <Services />
        <Process />
        <Portfolio />
        <Pricing />
        <ContactForm />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
