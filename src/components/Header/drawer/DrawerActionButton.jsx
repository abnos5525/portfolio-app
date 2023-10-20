import {Fab} from "@mui/material";
import {MenuRounded} from "@mui/icons-material";
import {useContext} from "react";
import {AppContext} from "../../../AppContext";

const DrawerActionButton =() =>{

    const {setDrawerOpen} = useContext(AppContext)
    return(
        <Fab onClick={()=> setDrawerOpen(true)} aria-label="Sidebar" color="secondary" size="small"
             sx={{m:2,zIndex:1,
            display:{
                xl:"none",
                lg:"none",
                md:"none",
                sm:"none",
                xs:"block"
            }}}>
            <MenuRounded sx={{verticalAlign:"middle"}}/>
        </Fab>
    )
}

export default DrawerActionButton