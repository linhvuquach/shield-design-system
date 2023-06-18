import styles from "./Button.styled";
import { ButtonProps } from "./types";
import { cx } from "@emotion/css";
import { Button as MuiButton, useButton } from "@mui/base";

const Button = ({
  label = "",
  children,
  color = "primary",
  size = "medium",
  ...props
}: ButtonProps) => {
  const { getRootProps } = useButton();
  return (
    <MuiButton
      className={cx(styles.button, styles.sizes[size], styles.colors[color])}
      {...props}
      {...getRootProps()}
    >
      {children || label}
    </MuiButton>
  );
};
export default Button;
