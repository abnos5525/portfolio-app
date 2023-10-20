import {AppBar, Box, Tab, Tabs, Toolbar, Typography} from "@mui/material";
import {TabsProps} from "../../constants/TabsProps";
import {useContext} from "react";
import {AppContext} from "../../AppContext";
import {TabsInfo} from "../../constants/TabsInfo";
import Logo from "./Logo";
import ThemeActionButton from "./ThemeActionButton";
const Header = () =>{

    const {tabValue, handleTabChange} = useContext(AppContext)

    const tabs = TabsInfo()
    return(
            <AppBar position="static" sx={{height:"70px",width:"100%",zIndex:3,display:{
                    xl:"block",
                    lg:"block",
                    md:"block",
                    sm:"block",
                    xs:"none",
                }, bgcolor:"primary.header"}}>
                <Toolbar sx={{height:"100%"}}>
                    <Box component="div" sx={{width:"100%"}}>
                        <Tabs value={tabValue} onChange={handleTabChange}
                              textColor="secondary"
                              indicatorColor="secondary"
                              aria-label="secondary tabs example">
                            {
                                tabs.map((t,index)=>(
                                    <Tab sx={{ml:1}} {...TabsProps(index)} label={
                                        <Typography sx={{
                                            fontSize:{
                                                xl:"1.2rem",
                                                lg:"1.2rem",
                                                md:"1.2rem",
                                                sm:".9rem",
                                                xs:".9rem"
                                            }
                                        }}>
                                            {t.icon}
                                            {t.label}
                                        </Typography>
                                    } />
                                ))
                            }

                        </Tabs>
                    </Box>
                    <ThemeActionButton/>

                    <Box component="div" sx={{width:"17%", textAlight:"center",display:"flex",justifyContent:"center"}}>
                        <Logo/>
                    </Box>
                </Toolbar>
            </AppBar>
    )
}

export default Header