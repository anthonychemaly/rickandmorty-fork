const klevPlugin = ({
  addUtilities,
}: {
  addUtilities: (object: Object) => void;
}) => {
  addUtilities({
    ".hover-link": {
      transition: "transform 0.2s, color 0.2s, background-color 0.2s",
    },
    "@media (prefers-reduced-motion: no-preference)": {
      ".hover-link:hover": {
        transform: "translate(2px,-2px)",
      },
    },
    ".section-padding": {
      "padding-block": "4rem",
    },
    ".section-margin": {
      "margin-block": "4rem",
    },
    ".single-grid": {
      display: "grid",
      "grid-template-columns": "repeat(1, minmax(0, 1fr))",
      "grid-template-rows": "repeat(1, minmax(0, 1fr))",
    },
    ".single-grid-item": {
      "grid-column-start": "1",
      "grid-row-start": "1",
      "grid-column-end": "1",
      "grid-row-end": "1",
    },
  });
};

export default klevPlugin;
