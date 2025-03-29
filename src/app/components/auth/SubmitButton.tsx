"use client";

import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

interface SubmitButtonProps {
  text: string;
}

const SubmitButton = ({ text }: SubmitButtonProps) => {
  const router = useRouter();

  const handleSubmit = () => {
    router.push("/dashboard"); // Redireciona para a tela de login
  };

  return (
    <Button
      fullWidth
      type="button"
      variant="contained"
      onClick={handleSubmit}
      sx={{
        backgroundColor: "#F59E0B",
        "&:hover": { backgroundColor: "#d97706" },
        fontWeight: "bold",
        boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
        py: 1.5,
      }}
    >
      {text}
    </Button>
  );
};

export default SubmitButton;
