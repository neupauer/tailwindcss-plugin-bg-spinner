const flatten = require("flat");
const svgToDataUri = require("mini-svg-data-uri");

const plugin = require("tailwindcss/plugin");

const svg = (color) => `
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 50 50"
  fill="${color}"
  xml:space="preserve"
>
  <path d="M25.251 6.461c-10.318 0-18.683 8.365-18.683 18.683h4.068c0-8.071 6.543-14.615 14.615-14.615V6.461z">
    <animateTransform
      attributeType="xml"
      attributeName="transform"
      type="rotate"
      from="0 25 25"
      to="360 25 25"
      dur="0.6s"
      repeatCount="indefinite"
    />
  </path>
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
