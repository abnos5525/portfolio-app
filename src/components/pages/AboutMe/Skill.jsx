import {Badge, Box, Chip, Divider, LinearProgress, Slide, Typography} from "@mui/material";
import {useEffect, useState} from "react";

const Skill = ({dividerAlign,color,label,value}) =>{

    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)

        return() =>{
            setLoading(false)
        }
    }, []);

    return(
        <Slide direction="up" in={loading} style={{
            transitionDelay: loading ? `100ms` : "0ms"
        }}>
        <Box sx={{zIndex:2}}>
            <Divider sx={{mt:4}} textAlign={dividerAlign}>
                <Chip color={color} label={<Typography sx={{fontSize:12,textAlign:"center"}}>{label}</Typography>} sx={{p:3}}
                size="small"/>
            </Divider>
            <Box sx={{display:"flex",alignItems:"center",textAlign:"center",mt:1,ml:5}}>
                <Box sx={{width:"80%",mr:1,mt:1}}>
                    <LinearProgress variant="determinate" value={parseInt(value)} color={color}
                                    sx={{height:8,borderRadius:1}}/>
                </Box>
                <Box sx={{minWidth:20}}>
                    <Typography variant="body2" color="#fff" sx={{ml:2}}>
                        <Badge variant="standard" badgeContent={`${value}%`} color={color}/>
                    </Typography>
                </Box>
            </Box>
        </Box>
        </Slide>

    )
}

export default Skill