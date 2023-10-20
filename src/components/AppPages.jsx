import TabPanel from "./Header/TabPanel";
import {MainPage,AboutMe,Contact} from "./pages";
import {useContext} from "react";
import {AppContext} from "../AppContext";

const AppPages = ()=>{
    const {tabValue} = useContext(AppContext)

    return(
        <>
            <TabPanel value={tabValue} index={0}>
                <MainPage/>
            </TabPanel>

            <TabPanel value={tabValue} index={1}>
                <AboutMe/>
            </TabPanel>

            <TabPanel value={tabValue} index={2}>
                <Contact/>
            </TabPanel>
        </>
    )
}

export default AppPages