import { theme } from "@chakra-ui/core";

const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    primary: {
      500: "#591B2B"
    }
  }
};

export default customTheme;
