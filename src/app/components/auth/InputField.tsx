"use client";
import { TextField } from "@mui/material";

interface InputFieldProps {
  label: string;
  type?: string;
}

const InputField = ({ label, type = "text" }: InputFieldProps) => {
  return (
    <TextField
      fullWidth
      variant="outlined"
      label={label}
      type={type}
      sx={{
        mb: 2,
        backgroundColor: "white",
        borderRadius: "8px",
      }}
    />
  );
};

export default InputField;
