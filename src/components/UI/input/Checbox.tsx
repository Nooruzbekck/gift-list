import { Checkbox, styled } from "@mui/material";

interface PROPS {
  color:
    | "primary"
    | "secondary"
    | "error"
    | "info"
    | "success"
    | "warning"
    | "default";
  checked: boolean;
  disabled?: boolean;
  onChange: () => void;
}

export const CheckBox: React.FC<PROPS> = ({
  color,
  checked,
  onChange,
  disabled,
  ...props
}) => {
  return (
    <StyledCheckbox
      {...props}
      disabled={disabled}
      checked={checked}
      color={color}
      onChange={onChange}
    />
  );
};

const StyledCheckbox = styled(Checkbox)(() => ({
  color: "#87898E",
  ":hover": {
    color: "#8639B5",
  },
  "&.Mui-checked": {
    color: "#8639B5",
  },
  "&.Mui-disabled": {
    color: "#C0C0C0",
  },
}));
