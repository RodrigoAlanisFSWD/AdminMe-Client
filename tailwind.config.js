const colors = require('tailwindcss/colors')

module.exports = {
    purge: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false,
    theme: {
        extend: {
            fontFamily: {
                poppins: ['Inter', 'Poppins']
            },
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            gray: colors.trueGray,
            indigo: colors.indigo,
            red: colors.rose,
            yellow: colors.amber,
            purple: {
                light: '#DDD0FF',
                DEFAULT: '#6E41E2',
                dark: '#5835B0',
                darkest: '#472C8A'
            },
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}