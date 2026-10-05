import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SaveMeNet from "./pages/SaveMeNet";
import VocaRise from "./pages/VocaRise";
import BeyondRoots from "./pages/BeyondRoots";
import OceanLens from "./pages/OceanLens";
import Cybersecurity from "./pages/Cybersecurity";
import BookRacks from "./pages/BookRacks";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}


function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/projects/savemenet" element={<SaveMeNet />}/>

        <Route path="/projects/vocarise" element={<VocaRise />}/>

        <Route path="/projects/beyond-roots" element={<BeyondRoots />} />

        <Route path="/projects/oceanlens" element={<OceanLens />} />

        <Route path="/projects/cybersecurity" element={<Cybersecurity />}/>

        <Route path="/projects/bookracks" element={<BookRacks />} />

      </Routes>

    </BrowserRouter>

  );

}

export default App;