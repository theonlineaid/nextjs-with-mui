import { alpha, createTheme, useTheme } from "@mui/material";




function remToPx(value) {
    return Math.round(parseFloat(value) * 16);
}

function pxToRem(value) {
    return `${value / 16}rem`;
}

function responsiveFontSizes({ sm, md, lg }) {
    return {
        "@media (min-width:600px)": {
            fontSize: pxToRem(sm),
        },
        "@media (min-width:900px)": {
            fontSize: pxToRem(md),
        },
        "@media (min-width:1200px)": {
            fontSize: pxToRem(lg),
        },
    };
}

// ----------------------------------------------------------------------

const FONT_PRIMARY = "Public Sans, sans-serif"; // Google Font
// const FONT_SECONDARY = 'CircularStd, sans-serif'; // Local Font

const typography = {
    fontFamily: FONT_PRIMARY,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    h1: {
        fontWeight: 800,
        lineHeight: 80 / 64,
        fontSize: pxToRem(40),
        ...responsiveFontSizes({ sm: 52, md: 58, lg: 64 }),
    },
    h2: {
        fontWeight: 800,
        lineHeight: 64 / 48,
        fontSize: pxToRem(32),
        ...responsiveFontSizes({ sm: 40, md: 44, lg: 48 }),
    },
    h3: {
        fontWeight: 700,
        lineHeight: 1.5,
        fontSize: pxToRem(24),
        ...responsiveFontSizes({ sm: 26, md: 30, lg: 32 }),
    },
    h4: {
        fontWeight: 700,
        lineHeight: 1.5,
        fontSize: pxToRem(20),
        ...responsiveFontSizes({ sm: 20, md: 24, lg: 24 }),
    },
    h5: {
        fontWeight: 700,
        lineHeight: 1.5,
        fontSize: pxToRem(18),
        ...responsiveFontSizes({ sm: 19, md: 20, lg: 20 }),
    },
    h6: {
        fontWeight: 700,
        lineHeight: 28 / 18,
        fontSize: pxToRem(17),
        ...responsiveFontSizes({ sm: 18, md: 18, lg: 18 }),
    },
    subtitle1: {
        fontWeight: 600,
        lineHeight: 1.5,
        fontSize: pxToRem(16),
    },
    subtitle2: {
        fontWeight: 600,
        lineHeight: 22 / 14,
        fontSize: pxToRem(14),
    },
    body1: {
        lineHeight: 1.5,
        fontSize: pxToRem(16),
    },
    body2: {
        lineHeight: 22 / 14,
        fontSize: pxToRem(14),
    },
    caption: {
        lineHeight: 1.5,
        fontSize: pxToRem(12),
    },
    overline: {
        fontWeight: 700,
        lineHeight: 1.5,
        fontSize: pxToRem(12),
        textTransform: "uppercase",
    },
    button: {
        fontWeight: 700,
        lineHeight: 24 / 14,
        fontSize: pxToRem(14),
        textTransform: "capitalize",
    },
};

const GREY = {
    100: "#F9FAFB",
    200: "#F4F6F8",
    300: "#DFE3E8",
    400: "#C4CDD5",
    500: "#919EAB",
    600: "#637381",
    700: "#454F5B",
    800: "#212B36",
    900: "#161C24",
};

export const theme = createTheme({
    palette: {
        common: { black: "#000", white: "#fff" },
        mode: 'dark',
        // mode: localStorage.getItem("darkMode") === "dark" ? "dark" : "light",
        primary: {
            main: "#f44336", // Red color for primary elements
            light: "#ff7961",
            dark: "#ba000d",
            contrastText: "#ffffff",
        },
        secondary: {
            main: "#3f51b5", // Blue color for secondary elements
            light: "#7986cb",
            dark: "#303f9f",
            contrastText: "#ffffff",
        },
        success: {
            main: "#66bb6a", // Green color for success elements
            light: "#98ee99",
            dark: "#338a3e",
            contrastText: "#ffffff",
        },
        error: {
            main: "#e91e63", // Pink color for error elements
            light: "#ff6090",
            dark: "#b0003a",
            contrastText: "#ffffff",
        },
        warning: {
            main: "#ff9800", // Orange color for warning elements
            light: "#ffc947",
            dark: "#c66900",
            contrastText: "#ffffff",
        },
        grey: GREY,
    },
    MuiOutlinedInput: {
        styleOverrides: {
            root: {
                "& .MuiOutlinedInput-notchedOutline": {
                    // borderColor: alpha(theme.palette.grey[500], 0.32),
                },
                "&.Mui-disabled": {
                    "& .MuiOutlinedInput-notchedOutline": {
                        // borderColor: theme.palette.action.disabledBackground,
                    },
                },
            },
        },
    },
    shape: {
        borderRadius: 8,
    },
    typography,
});