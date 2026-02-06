// tailwind.config.js
export const theme = {
    extend: {
        animation: {
            "scroll-full": "scroll 1s linear infinite",
        },
        keyframes: {
            scroll: {
                "0%": { transform: "translateX(0)" },
                "100%": { transform: "translateX(-50%)" },
            },
        },
    },
};
