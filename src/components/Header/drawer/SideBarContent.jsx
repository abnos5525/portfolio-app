import {Box, Divider, Tab, Tabs, Typography} from "@mui/material";
import {TabsProps} from "../../../constants/TabsProps";
import {TabsInfo} from "../../../constants/TabsInfo";
import {useContext} from "react";
import {AppContext} from "../../../AppContext";
import Logo from "../Logo";
import ThemeActionButton from "../ThemeActionButton";

const SideBarContent = () =>{

    const {tabValue, handleTabChange, setDrawerOpen} = useContext(AppContext)

    const tabs = TabsInfo()

    return(
        <Box sx={{mt:2,textAlign:"center"}}>
            <Logo/>
            <Divider variant="middle"/>
            <Tabs value={tabValue} onChange={handleTabChange}
                  textColor="secondary" orientation="vertical"
                  indicatorColor="secondary"
                  aria-label="secondary tabs example">
                {
                    tabs.map((t,index)=>(
                        <Tab onClick={()=>setDrawerOpen(false)} {...TabsProps(index)} label={
                            <Typography sx={{
                                fontSize:{
                                    xl:"1.2rem",
                                    lg:"1.2rem",
                                    md:"1.2rem",
                                    sm:"1rem",
                                    xs:"1rem"
                                },
                                mt:{
                                    xl:"1.2rem",
                                    lg:"1.2rem",
                                    md:"1.2rem",
                                    sm:"1rem",
                                    xs:"1rem"
                                }
                            }}>
                                {t.icon}
                                {t.label}
                            </Typography>
                        } />
                    ))
                }

            </Tabs>

            <Box sx={{mt:10}}>
                <ThemeActionButton/>

            </Box>

        </Box>
    )
}

export default SideBarContent