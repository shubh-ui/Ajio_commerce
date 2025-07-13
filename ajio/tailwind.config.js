// tailwind.config.ts


export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'source_Serif': ['var(source_Serif_4)', 'sans-serif'],
        'roboto': ['var(--font-roboto)', 'sans-serif'],
        'lora': ['var(--font-lora)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}