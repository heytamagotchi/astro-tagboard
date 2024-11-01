/** @type {import("tailwindcss").Config} */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
const fs = require("fs");

const noiseBitmap = fs.readFileSync("./src/assets/noise.png", { encoding: "base64" });
const noiseDataUri = "data:image/png;base64," + noiseBitmap;

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        "grid-pattern": `linear-gradient(to bottom right, theme('colors.primary / 0%'), theme('colors.gray.900 / 80%')), url('${noiseDataUri}')`
      },
      colors: {
        neutral: colors.neutral
      },
      fontFamily: {
        sans: [...defaultTheme.fontFamily.sans]
      }
    }
  },
  daisyui: {
    themes: [
      {
        'zbtheme': {
          'primary' : '#0c0898',
          'primary-focus' : '#130cd4',
          'primary-content' : '#FDFEFF',

          'secondary' : '#e01066',
          'secondary-focus' : '#fb4b95',
          'secondary-content' : '#FDFEFF',

          'accent' : '#62f9ed',
          'accent-focus' : '#94fff6',
          'accent-content' : '#212121',

          'neutral' : '#3b424e',
          'neutral-focus' : '#2a2e37',
          'neutral-content' : '#ffffff',

          'base-100' : '#ffffff',
          'base-200' : '#f9fafb',
          'base-300' : '#ced3d9',
          'base-content' : '#1e2734',

          'info' : '#1c92f2',
          'success' : '#009440',
          'warning' : '#ffa742',
          'error' : '#e60000',

          '--rounded-box': '1rem',          
          '--rounded-btn': '2rem',        
          '--rounded-badge': '1.9rem',      

          '--animation-btn': '.25s',       
          '--animation-input': '.2s',       

          '--btn-text-case': 'uppercase',   
          '--navbar-padding': '.5rem',      
          '--border-btn': '1px',            
        },
      },
    ],
  },
  plugins: [require("daisyui")]
};
