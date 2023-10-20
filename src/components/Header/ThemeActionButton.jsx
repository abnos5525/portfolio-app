import {useTheme} from "@mui/material/styles";
import {useContext} from "react";
import {Fab} from "@mui/material";
import {NightlightOutlined, WbSunnyOutlined} from "@mui/icons-material";
import {AppContext} from "../../AppContext";

const ThemeActionButton = () =>{

    const theme = useTheme()
    const {handleThemeChange} = useContext(AppContext)

    return(
            <Fab aria-label="ThemeChanger" variant="extended" color="secondary" onClick={handleThemeChange}
                 sx={{ml:2, color: "primary.light",textAlign:"center",
                     width:{md:60,sm:30},
                     height:40
            }}>
                {theme.palette.mode === "dark" ? <WbSunnyOutlined sx={{mr:1,m:"0 auto"}}/> : <NightlightOutlined sx={{mr:1,m:"0 auto"}}/>}
            </Fab>
    )
}

export default ThemeActionButton