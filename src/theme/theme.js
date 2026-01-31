import { createSystem, defaultConfig } from "@chakra-ui/react"

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial" },
        body: { value: "Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial" }
      },
      fontSizes: {
        xs: { value: "0.75rem" },
        sm: { value: "0.875rem" },
        md: { value: "1rem" },
        lg: { value: "1.125rem" },
        xl: { value: "1.25rem" },
        "2xl": { value: "1.5rem" }
      },
      lineHeights: {
        normal: { value: "1.5" },
        relaxed: { value: "1.7" }
      },
      radii: {
        sm: { value: "6px" },
        md: { value: "10px" },
        lg: { value: "14px" }
      },
      shadows: {
        sm: { value: "0 1px 2px rgba(0,0,0,0.04)" },
        md: { value: "0 4px 10px rgba(0,0,0,0.06)" }
      },
      colors: {
        brand: {
          50: { value: "#eff6ff" },
          100: { value: "#dbeafe" },
          500: { value: "#1e6fb8" },
          700: { value: "#184e7a" }
        },
        ui: {
          50: { value: "#ffffff" },
          100: { value: "#f7fafc" },
          200: { value: "#edf2f7" },
          500: { value: "#4a5568" }
        }
      }
    },
    styles: {
      global: {
        body: {
          bg: "ui.100",
          color: "gray.800",
          lineHeight: "relaxed",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale"
        },
        a: {
          color: "brand.500",
          _hover: {
            textDecoration: "underline"
          }
        }
      }
    }
  }
})






