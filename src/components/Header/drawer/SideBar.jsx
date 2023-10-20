import {useContext} from "react";
import { Drawer} from "@mui/material";
import {AppContext} from "../../../AppContext";
import SideBarContent from "./SideBarContent";

const SideBar = () =>{

    const {drawerOpen,setDrawerOpen} = useContext(AppContext)
    return(
            <Drawer xs={1} sm={0} md={0} lg={0} xl={0} sx={{
                bgcolor:"primary.main",height:"100vh",
                overflowX:"auto",overflowY:"hidden", zIndex:"5",
                "& .MuiDrawer-paper": {
                    width: 230
                },
                display:{
                    xs:"block",
                    sm:"none",
                    md:"none",
                    lg:"none",
                    xl:"none"
                }}}
                    open={drawerOpen} variant="temporary" onClose={()=> setDrawerOpen(false)}>

                <SideBarContent/>

            </Drawer>
    )
}

export default SideBar