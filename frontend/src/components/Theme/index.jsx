import colors from "./Colors";
const defaultTheme = {
  ...colors,
  social: {
    facebook: "#1877f2",
    twitter: "#00ACED"
  },
  //   breakpoints: [
  //     "1440px", // 0
  //     "1256px", // 1
  //     "1080px", // 2
  //     "968px", // 3
  //     "768px", // 4
  //     "512px", // 5
  //     "420px" // 6
  //   ],

  fontSize: [
    "14px", // 0
    "16px", // 1
    "18px", // 2
    "20px", // 3
    "32px", // 5
    "48px" // 6
  ],
  fontWeight: {
    body: 400,
    subheading: 500,
    link: 600,
    bold: 700,
    heading: 800
  },
  fonts: {
    heading: "TitlingGothicFB Normal,'Work Sans', -apple-system, Helvetica",
    body: " 'Work Sans', Helvetica"
  },
  shadows: {
    default: "0 4px 8px rgba(0,0,0,0.08)",
    hover: "0 8px 24px rgba(0,0,0,0.10)",
    active: "0 6px 20px rgba(0,0,0,0.09)",
    button: "0 4px 12px rgba(0,0,0,0.08)",
    largeHover:
      "0 12px 24px rgba(0,0,0,0.12), 0 8px 16px rgba(0,0,0,0.12), 0 4px 2px rgba(0,0,0,0.04),  0 6px 8px rgba(0,0,0,0.04)"
  },
  animations: {
    default: "0.15s ease-out",
    hover: "0.15s ease-in",
    active: "0.15s ease-in-out"
  }
};

export default defaultTheme;
