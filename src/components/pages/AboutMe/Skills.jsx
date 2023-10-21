import {useEffect, useState} from "react";
import Skill from "./Skill";
import Grid from "@mui/material/Unstable_Grid2";

const Skills = () =>{
    const [html, setHtml] = useState(0)
    const [css, setCss] = useState(0)
    const [javaScript, setJavaScript] = useState(0)
    const [reactJs, setReactjs] = useState(0)
    const [git, setGit] = useState(0)
    const [python, setPython] = useState(0)
    const [java, setJava] = useState(0)
    const [pyqt, setPyqt] = useState(0)

    useEffect(() => {
        const timer = setInterval(()=>{
            setHtml((old)=>{
                const diff = Math.round(Math.random() * 10)
                return Math.min(old + diff , 95)
            })
            setCss((old)=>{
                const diff = Math.round(Math.random() * 10)
                return Math.min(old + diff , 80)
            })
            setJavaScript((old)=>{
                const diff = Math.round(Math.random() * 10)
                return Math.min(old + diff , 72)
            })
            setReactjs((old)=>{
                const diff = Math.round(Math.random() * 10)
                return Math.min(old + diff , 82)
            })
            setPython((old)=>{
                const diff = Math.round(Math.random() * 10)
                return Math.min(old + diff , 65)
            })
            setGit((old)=>{
                const diff = Math.round(Math.random() * 10)
                return Math.min(old + diff , 60)
            })
            setJava((old)=>{
                const diff = Math.round(Math.random() * 10)
                return Math.min(old + diff , 75)
            })
            setPyqt((old)=>{
                const diff = Math.round(Math.random() * 10)
                return Math.min(old + diff , 65)
            })

        },30)
        return(()=>{
            clearInterval(timer)
        })
    }, []);
    return(
        <Grid spacing={2} xs={12} sm={12} md={5} lg={6} xl={6} sx={{mx:5,
            mt:1,mb:8,display:"flex",zIndex:2
        }}>
            <Grid xs={6} sx={{zIndex:2}}>
                <Skill dividerAlign="right" color="secondary" label="Html" value={html}/>
                <Skill dividerAlign="left" color="info" label="Css" value={css}/>
                <Skill dividerAlign="right" color="warning" label="JavaScript" value={javaScript}/>
                <Skill dividerAlign="left" color="error" label="git" value={git}/>
            </Grid>
            <Grid xs={6} sx={{ml:6,zIndex:2}}>
                <Skill dividerAlign="left" color="info" label="ReactJs" value={reactJs}/>
                <Skill dividerAlign="right" color="success" label="Python" value={python}/>
                <Skill dividerAlign="left" color="warning" label="Java" value={java}/>
                <Skill dividerAlign="right" color="secondary" label="pyqt" value={pyqt}/>
            </Grid>
        </Grid>
    )
}

export default Skills