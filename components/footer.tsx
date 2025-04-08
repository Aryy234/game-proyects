import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 mt-16 border-t border-cyan-900/50 bg-black/50">
      <div className="container px-4 mx-auto text-center">
        <div className="text-xl font-bold text-cyan-400 pixel-text">MINIJUEGOS_RETRO</div>
        <div className="flex justify-center gap-4 mt-4">
          <a
            href="https://github.com/Aryy234"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-sans text-cyan-400 hover:underline"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/arielelizalde/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-sans text-cyan-400 hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="mailto:marcelo-elizalde@hotmail.com"
            className="text-sm font-sans text-cyan-400 hover:underline"
          >
            Correo
          </a>
          <a
            href="https://portfolioariel.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:underline"
          >
            Portfolio
          </a>
        </div>
        <div className="text-sm text-cyan-600 pixel-text-sm mt-4">
          © 2025 Ariel Elizalde. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;