/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from "tailwind-scrollbar";

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                darkBlue: "#1B2432",
                grey: {
                    100: "#eeeeee",
                    200: "#E5E5E5",
                    300: "#D9D9D9",
                    400: "#C4D1D0",
                    500: "#E5E5E5",
                    600: "#4D4D4D",
                    900: "#0F0B0B",
                },
                primaryGreen: {
                    100: "#EFFFE5",
                    300: "#00B67A",
                    400: "#259B00",
                    500: "#07AA07",
                    700: "#00a859",
                    900: "#005128",
                },
                secondaryOrange: {
                    300: "#F9A502",
                    400: "#f58634",
                    500: "#f86624",
                },
            },
        },
    },
    plugins: [tailwindScrollbar],
};
