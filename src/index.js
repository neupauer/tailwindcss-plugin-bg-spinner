const flatten = require("flat");
const svgToDataUri = require("mini-svg-data-uri");

const plugin = require("tailwindcss/plugin");

const svg = (color) => `
<svg width="38" height="38" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a">
      <stop stop-color="${color}" stop-opacity="0" offset="0%" />
      <stop stop-color="${color}" stop-opacity=".631" offset="63.146%" />
      <stop stop-color="${color}" offset="100%" />
    </linearGradient>
  </defs>
  <g transform="translate(1 1)" fill="none" fill-rule="evenodd">
    <path d="M36 18c0-9.94-8.06-18-18-18" stroke="url(#a)" stroke-width="2">
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 18 18"
        to="360 18 18"
        dur="0.9s"
        repeatCount="indefinite"
      />
    </path>
    <circle fill="${color}" cx="36" cy="18" r="1">
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 18 18"
        to="360 18 18"
        dur="0.9s"
        repeatCount="indefinite"
      />
    </circle>
  </g>
</svg>
`;

const defaultOptions = {
  svg: svg,
};

module.exports = plugin.withOptions(function (options = defaultOptions) {
  return function ({ matchUtilities, theme, prefix, e }) {
    matchUtilities(
      {
        "bg-spinner": (value) => {
          return {
            backgroundImage: `url("${svgToDataUri(options.svg ? options.svg(value) : defaultOptions.svg(value))}")`,
          };
        },
      },
      { values: flatten(theme("colors"), { delimiter: "-" }), type: "color" }
    );
  };
});