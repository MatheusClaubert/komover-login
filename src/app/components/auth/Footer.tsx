"use client";

const Footer = () => {
  return (
    <footer className="text-sm text-emerald-200 text-center">
      © {new Date().getFullYear()} Desenvolvido por{" "}
      <a
        href="https://dartsiders-portfolio.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-white transition"
      >
        Matheus Claubert
      </a>.
    </footer>
  );
};

export default Footer;
