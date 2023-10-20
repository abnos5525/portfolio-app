import {createTheme, ThemeProvider} from "@mui/material/styles";
import {HelmetProvider} from "react-helmet-async";
import {CacheProvider} from "@emotion/react";
import {prefixer} from "stylis";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";

const darkTheme = createTheme({
    direction: "rtl",
    typography: {
        fontFamily: "vazir, roboto"
    },
    palette:{
        mode:"dark",
        primary:{
            main:"#1f1f1f",
            mainLight:"#262626",
            light:"#fff",
            header:"#181818",
            contact:"#b69d9d",
            about:"#565656",
        },
        secondary:{
            main:"#e65f78"
        },
    }
})

const lightTheme = createTheme({
    direction: "rtl",
    typography: {
        fontFamily: "vazir, roboto"
    },
    palette:{
        mode:"dark",
        primary:{
            main:"#d3d3d3",
            mainLight:"#6b6b6b",
            light:"#0e0e0e",
            header:"#494949",
            contact:"#2d2323",
            about:"#282828",
        },
        secondary:{
            main:"#e78999",
        },
    }
})

export const cacheRTL = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin]
})

const MainTemplate = ({children,mode}) =>{

    const theme = mode === "dark" ? darkTheme : lightTheme

    return(
        <CacheProvider value={cacheRTL}>
            <ThemeProvider theme={theme}>
                <HelmetProvider>
                    {children}
                </HelmetProvider>
            </ThemeProvider>
        </CacheProvider>
    )
}

export default MainTemplate