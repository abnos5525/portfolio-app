import {Box, Fab, Link, Typography} from "@mui/material";
import {CloseRounded, GitHub, Instagram, LinkedIn, Reddit, ShareRounded} from "@mui/icons-material";
import {useCallback, useEffect, useRef, useState} from "react";
import {useSpring, animated} from "react-spring";
import Grid from "@mui/material/Unstable_Grid2";
import Typed from "typed.js";
import {loadFull} from "tsparticles";
import {Amoung} from "../../constants/particles";
import Particle from "./Particle";
const Contact = () =>{

    const amoungParticle = Amoung()

    const [showIcons, setShowIcons] = useState(true)

    const iconAnim = useSpring({
        transform: showIcons ? 'scale(0)' : 'scale(1)',
    })
    const toggleIcons = () => {
        setShowIcons(!showIcons);
    };

    const nameRef = useRef(null);
    useEffect(() => {
        const typed = new Typed(nameRef.current, {
            strings: ["ارتباط با من"],
            typeSpeed: 50,
            showCursor:false
        });

        return () => {
            typed.destroy();
        };
    }, []);

    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    return(
        <Box component="div" sx={{textAlign:"center",display:"flex",
            justifyContent:"center",alignItems:"center",flexDirection:"column",
            height:"70vh", mb:20}}>

            <Particle option={amoungParticle} init={particlesInit} loaded={particlesLoaded}/>

            <Typography ref={nameRef} variant="h3" sx={{my:3,color:"primary.light",zIndex:3}}></Typography>

            {showIcons ?
            <Fab onClick={toggleIcons} sx={{width:"70pt",height:"70pt",zIndex:1}} color="secondary">
                 <ShareRounded sx={{fontSize:"20pt"}}/>
            </Fab>
                :
                <animated.div style={iconAnim}>
                    <Grid container
                          sx={{
                              display: 'flex',
                              flexDirection: 'column',
                              bgcolor: 'primary.contact',
                              padding: 2,
                              borderRadius: 100,
                              position:"relative",
                              width:200,
                              height:300,
                              zIndex:2
                          }}
                    >
                        <Fab onClick={toggleIcons} sx={{width:"25pt",height:"25pt",position:"absolute",left:10}} color="secondary">
                            <CloseRounded sx={{fontSize:"15pt"}}/>
                        </Fab>
                        <Grid xs={12} sx={{my:3,position:"relative"}}>
                            <Link sx={{mr:5,position:"absolute",top:-20,right:20}} href="https://github.com/abnos5525" rel="noopener noreferrer" target="_blank">
                                <GitHub sx={{color:"primary.main",fontSize:50}}/>
                            </Link>
                        </Grid>
                        <Grid xs={12} sx={{my:3,position:"relative"}}>
                            <Link sx={{mr:5,position:"absolute",top:10,right:-30}} href="https://instagram.com/hosseinn_heidary" rel="noopener noreferrer" target="_blank">
                                <Instagram sx={{color:"primary.main",fontSize:50}}/>
                            </Link>
                        </Grid>

                        <Grid xs={12}  sx={{my:3,position:"relative"}}>
                            <Link sx={{mr:5,position:"absolute",top:25,right:-30}} href="https://www.linkedin.com/in/hossein-heidary-00a928235" rel="noopener noreferrer" target="_blank">
                                <LinkedIn sx={{color:"primary.main",fontSize:50}}/>
                            </Link>
                        </Grid>
                        <Grid xs={12} sx={{my:4,position:"relative"}}>
                            <Link sx={{mr:5,position:"absolute",top:30,right:20}} href="https://www.reddit.com/user/legend5525" rel="noopener noreferrer" target="_blank">
                                <Reddit sx={{color:"primary.main",fontSize:50}}/>
                            </Link>
                        </Grid>

                    </Grid>
                </animated.div>
            }

        </Box>
    )
}

export default Contact