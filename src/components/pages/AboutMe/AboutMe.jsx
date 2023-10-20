import Grid from "@mui/material/Unstable_Grid2";
import {Box, Card, CardContent, Chip, Typography} from "@mui/material";
import {DevInfo} from "../../../constants/DevInfo";
import Skills from "./Skills";
import {useCallback} from "react";
import {loadFull} from "tsparticles";
import {collisions} from "../../../constants/particles";
import Particles from "react-particles";

const AboutMe = () =>{

    const info = DevInfo()

    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    return(

        <Grid container sx={{zIndex:3}}>

            <Grid xs={12} sm={12} md={5} lg={4} xl={4} sx={{mx:2,
                mt:3, zIndex:3
            }}>
                <Particles options={collisions} init={particlesInit} loaded={particlesLoaded}/>

                {info.map((i,index)=>(
                    <Card key={index} sx={{mb:2, bgcolor:"primary.about"}}>
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