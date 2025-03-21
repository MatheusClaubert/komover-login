"use client";
import { Container, Typography } from "@mui/material";
import InputField from "./InputField";
import SubmitButton from "./SubmitButton";

const LoginForm = () => {
  return (
    <Container maxWidth="xs" className="flex flex-col items-center justify-center h-full ">
      <div className="text-center mb-6">
        <Typography variant="h1" fontWeight="bold"  
        sx={{ 
        mt: 4, 
        fontSize: { xs: '2.5rem', sm: '3rem', md: '4rem' } 
        }}>
          KOMOVER
        </Typography>
        <Typography variant="h6" className="pb-14">Dra. Yanka Komora</Typography>
        <Typography variant="h5" fontWeight="bold" className="pb-10 pt-8">
          Simplificando a Gestão, Elevando o Cuidado.
        </Typography>
      </div>

      {/* Formulário */}
      <div className="w-full text-left mb-6">
        <Typography
          variant="h5"
          fontWeight="extrabold"
          className="text-white [text-shadow:2px_2px_4px_rgba(0,0,0,0.4)]"
        >
          Acesse sua conta
        </Typography>
        <hr className="border-t border-white w-auto mt-2" />
      </div>

      <form className="w-full flex flex-col gap-4">
        <InputField label="Seu email" />
        <InputField label="Senha" type="password" />
        <SubmitButton text="Entrar" />
      </form>
    </Container>
  );
};

export default LoginForm;
