import { Route, Routes } from "react-router-dom";
import Footer from "./components/Shared/Footer";
import NavBar from "./components/Shared/NavBar";
import ScrollToTop from "./components/Shared/ScrollToTop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Homepage from "./pages/Homepage";
import NotFound from "./pages/NotFound";
import Resume from "./pages/Resume";
import WhatIDo from "./pages/WhatIDo";
import { skipLink } from "./styles/global.css";
import { app, frame, main } from "./styles/styles.css";

export default function App() {
  return (
    <div className={app}>
      <a className={skipLink} href="#main">
        Skip to content
      </a>
      <div className={frame}>
        <ScrollToTop />
        <NavBar />
        <main id="main" className={main}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<WhatIDo />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}
