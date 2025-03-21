"use client";
import { Button } from "@mui/material";

interface SubmitButtonProps {
  text: string;
}

const SubmitButton = ({ text }: SubmitButtonProps) => {
  return (
    <Button
      fullWidth
      variant="contained"
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
