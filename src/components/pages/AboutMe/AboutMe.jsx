import Grid from "@mui/material/Unstable_Grid2";
import {Box, Card, CardContent, Chip, Typography} from "@mui/material";
import {DevInfo} from "../../../constants/DevInfo";
import Skills from "./Skills";

const AboutMe = () =>{

    const info = DevInfo()

    return(

        <Grid container sx={{zIndex:2}}>

            <Grid xs={12} sm={12} md={5} lg={4} xl={4} sx={{mx:2,
                mt:5, zIndex:2
            }}>

                {info.map((i,index)=>(
                    <Card key={index} sx={{ bgcolor:"primary.about",mb:1}}>
                        <Box sx={{display:"flex", flexDirection:"column"}}>
                            <CardContent>
                                <Box sx={{display:"flex"}}>
                                    <Typography sx={{width:"90%"}} variant="h6" color="secondary.main">
                                        {i.label}
                                    </Typography>

                                    {i.icon}
                                </Box>
                                <Box sx={{display:"flex",mt:3,direction:"rtl",width:"100%"}}>
                                    <Typography variant="body2" sx={{color:"primary.main"}}>
                                        {i.describe}
                                    </Typography>
                                </Box>
                                <Box sx={{display:"flex",mt:2,width:"100%"}}>
                                    {i.langs.map((l)=>(
                                        <Chip label={
                                           <Typography variant="body2" color="primary.light">{l}</Typography>
                                        } sx={{mr:1,bgcolor:"primary.main"}} size="small"/>
                                    ))}
                                </Box>
                            </CardContent>
                        </Box>

                    </Card>
                ))}


            </Grid>

                <Skills/>

        </Grid>
    )
}

export default AboutMe