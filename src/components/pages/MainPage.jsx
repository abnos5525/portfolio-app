import {Avatar, Box, Typography} from "@mui/material";
import avatar from "../../assets/avatar.jpg"
import {useCallback, useEffect, useRef, useState} from "react";
import Typed from "typed.js";
import TextTransition, { presets } from 'react-text-transition';
import {loadFull} from "tsparticles";
import Particles from "react-particles";
import {links} from "../../constants/particles"
const MainPage = () =>{

    const nameRef = useRef(null);

    const TEXTS = ["برنامه نویس فرانت اند هستم","برنامه نویس ریکت هستم","دانشجوی نرم افزار هستم",
        "برنامه نویس پایتون هستم"];

    const [index,setIndex] = useState(0)

    useEffect(() => {
        const typed = new Typed(nameRef.current, {
            strings: ["محمدحسین حیدری"],
            typeSpeed: 50,
            showCursor:false
        });

        return () => {
            typed.destroy();
        };
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() =>
                setIndex((index) => index + 1),
            2000);

        return()=>{
            clearTimeout(intervalId)
        }
    }, []);


    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    return(
            <Box component="div" flexDirection="column" sx={{display:"flex",justifyContent:"center",textAlign:"center",
                    position:"relative",alignItems:"center",height:"100vh",
                        top:{
                            xl:20,
                            lg:20,
                            md:20,
                            sm:200,
                            xs:200
                        } }}>
                    <Particles sx={{zIndex:1}} id="tsparticles" options={links} init={particlesInit} loaded={particlesLoaded}/>
                        <Avatar src={avatar} sx={{
                            m:"0 auto",
                            width:{
                                xl:"15rem",
                                lg:"15rem",
                                md:"15rem",
                                sm:"12rem",
                                xs:"15rem",
                            },
                            height:{
                                xl:"15rem",
                                lg:"15rem",
                                md:"15rem",
                                sm:"12rem",
                                xs:"15rem",
                            }
                        }}>
                            HH
                        </Avatar>

                            <Typography ref={nameRef} sx={{color:"primary.light",
                                fontSize:{
                                    xl:40,
                                    lg:40,
                                    md:35,
                                    sm:35,
                                    xs:35}}}>

                            </Typography>

                    <Box sx={{display:"flex",mt:2,color:"primary.light",
                        fontSize:25}}>
                        <Typography sx={{mr:1}}> من یک </Typography>

                        <TextTransition springConfig={presets.wobbly}>
                            {TEXTS[index % TEXTS.length]}
                        </TextTransition>
                    </Box>

            </Box>
    )
}

export default MainPage