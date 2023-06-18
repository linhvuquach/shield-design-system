import { ButtonProps as MuiButtonProps } from "@mui/base";
import {BaseSize} from "@lib/types";
import BaseColor from "@lib/types/base-color";

export type ButtonBaseProps = Pick<MuiButtonProps, "children">;

export type ButtonSize = BaseSize;

export type ButtonColor = Pick<BaseColor, 'primary' | 'secondary'>;

export type ButtonProps = ButtonBaseProps & {
  /**
   * How large should the button be?
   */
  size?: keyof ButtonSize;
  /**
   * Button contents
   */
  label?: string;
  /**
   * Color button
   */
  color?: keyof ButtonColor;
  /**
   * Optional click handler
   */
  onClick?: () => void;
};
