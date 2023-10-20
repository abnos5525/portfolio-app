import {createContext} from "react";

export const AppContext = createContext({
    tabValue: 0,
    handleTabChange: () => [],

    drawerOpen: false,
    setDrawerOpen: () => [],
    handleThemeChange: () => [],

})