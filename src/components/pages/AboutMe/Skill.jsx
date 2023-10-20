import {Badge, Box, Chip, Divider, LinearProgress, Typography} from "@mui/material";

const Skill = ({dividerAlign,color,label,value}) =>{

    return(
        <Box>
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
    )
}

export default Skill