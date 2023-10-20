import {CallRounded, CodeRounded, HomeRounded} from "@mui/icons-material";

export const TabsInfo = () =>{
    const TabsInfo = [
        {label:"صفحه اصلی",icon:<HomeRounded sx={{verticalAlign:"middle",mr:1}}/>},
        {label:"رزومه من",icon:<CodeRounded sx={{verticalAlign:"middle",mr:1}}/>},
        {label:"شبکه اجتماعی",icon:<CallRounded sx={{verticalAlign:"middle",mr:1}} />},
    ]
    return TabsInfo
}