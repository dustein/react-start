import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        gray: {
          900: { value: "#181B23" },
          800: { value: "#1F2029" },
          700: { value: "#353646" },
          600: { value: "#4B4D63" },
          500: { value: "#616480" },
          400: { value: "#797D9A" },
          300: { value: "#9699B0" },
          200: { value: "#B3B5C6" },
          100: { value: "#D1D2DC" },
          50:  { value: "#EEEEF2" },
        },
      },
      fonts: {
        heading: { value: "Roboto" },
        body: { value: "Roboto" },
      }
    },
  },
  globalCss: {
    body: {
      background: "{colors.gray.900}",
      color: "{colors.gray.50}",
      fontFamily: "{fonts.body}",
    },
    "h1, h2, h3, h4, h5, h6": {
      fontFamily: "{fonts.heading}",
    }
  }
});

export const system = createSystem(defaultConfig, customConfig);
