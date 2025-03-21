"use client";
import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      className="mt-6 text-center text-lg"
    >
      © {new Date().getFullYear()} Desenvolvido por Matheus Claubert & Pedro Leandro. Todos os direitos reservados.
    </Typography>
  );
};

export default Footer;
