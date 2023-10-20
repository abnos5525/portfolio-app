import MainTemplate from "./templates/MainTemplate";
import Grid from "@mui/material/Unstable_Grid2";
import Header from "./components/Header/Header";
import {AppContext} from "./AppContext";
import {useEffect, useState} from "react";
import AppPages from "./components/AppPages";
import DrawerActionButton from "./components/Header/drawer/DrawerActionButton";
import SideBar from "./components/Header/drawer/SideBar";
import {useTheme} from "@mui/material/styles"
import {useMediaQuery} from "@mui/material";
const App=()=> {

  const [tabValue, setTabValue] = useState(0)

    const [drawerOpen, setDrawerOpen] = useState(false)
  const handleTabChange = (event, value) =>{
    setTabValue(value)
  }

  const theme = useTheme()

  const isMdUp = useMediaQuery(theme.breakpoints.up("sm"))
  useEffect(() => {
    if(isMdUp){
      setDrawerOpen(false)
    }
  }, [isMdUp]);

  const [mode, setMode] = useState()

  const handleThemeChange = ()=>{
    setMode(prev => prev === "light" ? "dark" : "light")
  }

  useEffect(() => {
    setMode("dark")
  }, []);

  return (
      <AppContext.Provider value={{
        tabValue,
        handleTabChange,
          setDrawerOpen,
          drawerOpen,
        handleThemeChange
      }}>
        <MainTemplate mode={mode}>
          <Grid container sx={{height:"100vh",bgcolor:"primary.main",overflowY:"auto",overflowX:"disable"}}>
            <DrawerActionButton/>
            <SideBar/>
            <Header/>
            <AppPages/>
          </Grid>
        </MainTemplate>
      </AppContext.Provider>
  );
}
export default App;