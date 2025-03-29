"use client";
import { useForm } from "react-hook-form";
import { Container, Typography } from "@mui/material";
import InputField from "./InputField";
import SubmitButton from "./SubmitButton";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log("Dados do formulário:", data);
  };

  return (
    <Container maxWidth="xs" className="flex flex-col items-center justify-center h-full">
      <div className="text-center mb-6">
        <Typography variant="h1" fontWeight="bold">
          KOMOVER
        </Typography>
        <Typography variant="h6" className="pb-14">Dra. Yanka Komora</Typography>
        <Typography variant="h5" fontWeight="bold" className="pb-10 pt-8">
          Simplificando a Gestão, Elevando o Cuidado.
        </Typography>
      </div>

      {/* Formulário */}
      <div className="w-full text-left mb-6">
        <Typography variant="h5" fontWeight="extrabold" className="text-white [text-shadow:2px_2px_4px_rgba(0,0,0,0.4)]">
          Acesse sua conta
        </Typography>
        <hr className="border-t border-white w-auto mt-2" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-4">
        <InputField
          label="Seu email"
          type="email"
          register={register("email", {
            required: "O email é obrigatório",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Email inválido",
            },
          })}
          error={isSubmitted ? (errors.email?.message as string | undefined) : undefined}
        />

        <InputField
          label="Senha"
          type="password"
          register={register("password", {
            required: "A senha é obrigatória",
            minLength: {
              value: 8,
              message: "A senha deve ter pelo menos 8 caracteres",
            },
          })}
          error={isSubmitted ? (errors.password?.message as string | undefined) : undefined}
        />

        <SubmitButton text="Entrar" />
      </form>
    </Container>
  );
};

export default LoginForm;
