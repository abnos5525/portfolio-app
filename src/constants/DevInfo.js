import {CodeRounded, DesignServicesRounded, LaptopRounded} from "@mui/icons-material";

export const DevInfo = () =>{
    const DevInfo = [
        {label:"طراحی وب",icon:<CodeRounded sx={{fontSize:30,color:"secondary.main",textAlign:"left"}}/>,
            describe:"Web Application, Single page Application, websites...",
            langs:[
                "Html","Css","Js","ReactJs","Java Servlet"
            ]
        },
        {label:"نرم افزار ویندوز",icon:<LaptopRounded sx={{fontSize:30,color:"secondary.main",textAlign:"left"}}/>,
            describe:"Automaters, Windows Software...",
            langs:[
                "Python","PyQt","Java"
            ]
        },
        {label:"رابط کاربری",icon:<DesignServicesRounded sx={{fontSize:30,color:"secondary.main",textAlign:"left"}}/>,
            describe:"UI, UX",
            langs:[
                "Figma","XD"
            ]
        },
    ]
    return DevInfo
}