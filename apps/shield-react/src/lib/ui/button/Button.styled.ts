import { css } from "@emotion/css";
import { ButtonColor, ButtonSize } from "@lib/ui";
import {
  COLOR_BASE_GREEN_600,
  COLOR_BASE_GREY_800,
  COLOR_BASE_WHITE,
  SIZE_FONT_LARGE,
  SIZE_FONT_MEDIUM,
  SIZE_FONT_SMALL,
} from "@linhvuquach/shield-tokens";

const button = css`
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 1em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
`;

const colors: ButtonColor = {
  primary: css`
    color: ${COLOR_BASE_WHITE};
    background-color: ${COLOR_BASE_GREEN_600};
  `,
  secondary: css`
    color: ${COLOR_BASE_GREY_800};
    background-color: transparent;
    box-shadow: rgba(0, 0, 0, 0.15) 0 0 0 1px inset;
  `,
};

const sizes: ButtonSize = {
  small: css`
    font-size: ${SIZE_FONT_SMALL}em;
    padding: 4px 8px;
  `,
  medium: css`
    font-size: ${SIZE_FONT_MEDIUM}em;
    padding: 8px 16px;
  `,
  large: css`
    font-size: ${SIZE_FONT_LARGE}em;
    padding: 12px 24px;
  `,
};

export default {
  button,
  colors,
  sizes,
} as const;
