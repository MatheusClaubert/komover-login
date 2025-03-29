"use client";
import { TextField } from "@mui/material";

interface InputFieldProps {
  label: string;
  type?: string;
  register?: any;
  error?: string;
}

const InputField = ({ label, type = "text", register, error }: InputFieldProps) => {
  return (
    <TextField
      {...register} 
      fullWidth
      variant="outlined"
      label={label}
      type={type}
      error={!!error}
      helperText={error || ""}
      sx={{
        mb: 2,
        backgroundColor: "white",
        borderRadius: "8px",
      }}
    />
  );
};

export default InputField;
