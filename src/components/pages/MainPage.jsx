import {Avatar, Box, Typography} from "@mui/material";
import avatar from "../../assets/avatar.jpg"
import {useCallback, useEffect, useRef, useState} from "react";
import Typed from "typed.js";
import TextTransition, { presets } from 'react-text-transition';
import {loadFull} from "tsparticles";
import {links} from "../../constants/particles"
import Particle from "./Particle";
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
                    position:"relative",alignItems:"center",height:"90vh",
                        top:{
                            xl:5,
                            lg:5,
                            md:-30,
                            sm:-80,
                            xs:-80
                        } }}>
                <Particle option={links} init={particlesInit} loaded={particlesLoaded}/>

                        <Avatar src={avatar} sx={{
                            m:"0 auto",
                            width:"15rem",
                            height:"15rem"
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

                    <Box sx={{display:"flex",mt:2,color:"primary.light"}}>
                        <Typography sx={{mr:1,fontSize:20}}> من یک </Typography>

                        <TextTransition springConfig={presets.wobbly}>
                            <Typography sx={{fontSize:20}}>
                            {TEXTS[index % TEXTS.length]}
                            </Typography>
                        </TextTransition>
                    </Box>

            </Box>
    )
}

export default MainPage