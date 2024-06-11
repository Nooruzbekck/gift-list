import { useState } from "react";
import { IconButton, InputAdornment, TextField, styled } from "@mui/material";
import { Icons } from "../../../assets";

interface PROPS {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: "email" | "password" | "text" | "number";
  placeholder: string;
  props?: void;
  error?: boolean;
}

export const Input: React.FC<PROPS> = ({
  value,
  onChange,
  type = "text",
  placeholder,
  error,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <StyledInput
      type={showPassword ? "text" : type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      error={error}
      {...props}
      InputProps={{
        endAdornment:
          type === "password" ? (
            <InputAdornment position="end">
              <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                {error ? (
                  <Icons.InputError />
                ) : showPassword ? ( 
                  <Icons.OpenEye />
                ) : (
                  <Icons.CloseEye />
                )}
              </IconButton>
            </InputAdornment>
          ) : error ? (
            <InputAdornment position="end">
              <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                <Icons.InputError />
              </IconButton>
            </InputAdornment>
          ) : null,
      }}
    />
  );
};

const StyledInput = styled(TextField)(({ error }) => ({
  height: "46px",
  border: `1px solid ${error ? "#F10000" : "#BDBDBD"}`,
  borderRadius: "6px",
  paddingLeft: "10px",
  display: "flex",
  justifyContent: "center",
  ".MuiInputBase-input": {
    fontSize: "12px",
    fontWeight: "400",
    color: `${error ? "red" : "#020202"}`,
  },
  "::placeholder": {
    color: `${error ? "red" : "#8D949E"}`,
  },
  ":focus-within": {
    border: `1px solid ${error ? "red" : "#6200EE"}`,
  },
  "& fieldset": { border: "none" },
}));
