# Tailwind CSS Plugin – Background Spinner

A Tailwind CSS plugin for background spinner.

## Install

1. Install the plugin:

```bash
# Using npm
npm install @neupauer/tailwindcss-plugin-bg-spinner

# Using Yarn
yarn add @neupauer/tailwindcss-plugin-bg-spinner
```

2. Add it to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  // ...
  plugins: [require("@neupauer/tailwindcss-plugin-bg-spinner")],
};

// With Optional Config
module.exports = {
  // ...
  plugins: [
    require("@neupauer/tailwindcss-plugin-bg-spinner")({
      svg: (color) => `<svg>...${color}...</svg>`,
    }),
  ],
};
```

## Usage

```html
<div class="bg-spinner-blue-500/50"></div>
```
