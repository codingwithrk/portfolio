import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NewYear from "./components/NewYear";

function App() {
  return (
    <main className="min-h-screen">
      <NewYear />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
