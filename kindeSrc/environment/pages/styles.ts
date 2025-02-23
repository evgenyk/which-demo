// CSS Variables configuration
const kindeVariables = {
  baseFontFamily:
    "-apple-system, system-ui, BlinkMacSystemFont, Helvetica, Arial, Segoe UI, Roboto, sans-serif",
  controlSelectTextBorderRadius: "4px",
  buttonPrimaryBackgroundColor: "#0050B3",
  buttonPrimaryColor: "#fff",
  buttonBorderRadius: "99px",
  buttonSecondaryBorderWidth: "1px",
  buttonSecondaryBorderColor: "#e9edec",
  buttonSecondaryColor: "#3d1cba",
  buttonSecondaryBorderStyle: "none",
  buttonSecondaryBackgroundColor: "rgba(235,233,248,0.6)",
  buttonSecondaryBorderRadius: "99px",
  fallbackActionTextAlign: "left",
} as const;

export const generateCSSVariables = (): string => `
  :root {
    --kinde-base-font-family: ${kindeVariables.baseFontFamily};
    --kinde-control-select-text-border-radius: ${kindeVariables.controlSelectTextBorderRadius};
    --kinde-button-primary-background-color: ${kindeVariables.buttonPrimaryBackgroundColor};
    --kinde-button-primary-color: ${kindeVariables.buttonPrimaryColor};
    --kinde-button-border-radius: ${kindeVariables.buttonBorderRadius};
    --kinde-button-secondary-background-color: ${kindeVariables.buttonSecondaryBackgroundColor};
    --kinde-button-secondary-border-width: ${kindeVariables.buttonSecondaryBorderWidth};
    --kinde-button-secondary-border-color: ${kindeVariables.buttonSecondaryBorderColor};
    --kinde-button-secondary-border-style: ${kindeVariables.buttonSecondaryBorderStyle};
    --kinde-button-secondary-border-radius: ${kindeVariables.buttonSecondaryBorderRadius};
    --kinde-button-secondary-color: ${kindeVariables.buttonSecondaryColor};
    --kinde-fallback-action-text-align: ${kindeVariables.fallbackActionTextAlign};
  }

  [data-kinde-choice-separator] {
    text-transform: uppercase;
  }


  [data-kinde-control-label] {
    font-size: 1.125rem;
    font-weight: 500;
    line-height: 1.5;
  }

  [data-kinde-control-select-text] { 
    height: 44px;
  }

  [data-kinde-button] {
    height: 44px;
    width: 220px;
  }

`;
