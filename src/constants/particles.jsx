import {useTheme} from "@mui/material/styles";

export const links = {
        fps_limit: 60,
        interactivity: {
            detect_on: "canvas",
            events: {
                onclick: { enable: true, mode: "push" },
                onhover: {
                    enable: true,
                    mode: "attract",
                    parallax: { enable: false, force: 60, smooth: 10 }
                },
                resize: true
            },
            modes: {
                push: { quantity: 4 },
                attract: { distance: 200, duration: 0.4, factor: 5 }
            }
        },
        particles: {
            color: { value: "#e65f78" },
            line_linked: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.4,
                width: 1
            },
            move: {
                attract: { enable: false, rotateX: 600, rotateY: 1200 },
                bounce: false,
                direction: "none",
                enable: true,
                out_mode: "out",
                random: false,
                speed: 2,
                straight: false
            },
            number: { density: { enable: true, value_area: 800 }, value: 80 },
            opacity: {
                anim: { enable: false, opacity_min: 0.1, speed: 1, sync: false },
                random: false,
                value: 0.5
            },
            shape: {
                character: {
                    fill: false,
                    font: "Verdana",
                    style: "",
                    value: "*",
                    weight: "400"
                },
                image: {
                    height: 100,
                    replace_color: true,
                    src: "images/github.svg",
                    width: 100
                },
                polygon: { nb_sides: 5 },
                stroke: { color: "#000000", width: 0 },
                type: "circle"
            },
            size: {
                anim: { enable: false, size_min: 0.1, speed: 40, sync: false },
                random: true,
                value: 5
            }
        },
        polygon: {
            draw: { enable: false, lineColor: "#ffffff", lineWidth: 0.5 },
            move: { radius: 10 },
            scale: 1,
            type: "none",
            url: ""
        },
        retina_detect: true
    }

export const collisions = {
        backgroundMode: {
            enable: true,
            zIndex: 0
        },
        particles: {
            number: {
                value: 200,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: "#e65f78"
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                    color: "#000000"
                },
                image: {
                    src: "img/github.svg",
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: 0.4,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: true,
                    speed: 2,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: false
            },
            move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: false
                },
                onclick: {
                    enable: false
                },
                resize: false
            }
        },
        retina_detect: true
    }


export const Amoung = () =>{
    const theme = useTheme()
    const backgroundColor = theme.palette.mode === "dark" ? "#fff" : "#000";
    const amoung = {
        fullScreen: {
            enable: true
        },
        fpsLimit: 60,
        particles: {
            groups: {
                z5000: {
                    number: {
                        value: 70
                    },
                    zIndex: {
                        value: 5000
                    }
                },
                z7500: {
                    number: {
                        value: 30
                    },
                    zIndex: {
                        value: 75
                    }
                },
                z2500: {
                    number: {
                        value: 50
                    },
                    zIndex: {
                        value: 25
                    }
                },
                z1000: {
                    number: {
                        value: 40
                    },
                    zIndex: {
                        value: 10
                    }
                }
            },
            number: {
                value: 200,
                density: {
                    enable: false,
                    value_area: 800
                }
            },
            color: {
                value: "#e65f78",
                animation: {
                    enable: false,
                    speed: 20,
                    sync: true
                }
            },
            shape: {
                type: "circle"
            },
            opacity: {
                value: 1,
                random: false,
                animation: {
                    enable: false,
                    speed: 3,
                    minimumValue: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3
            },
            links: {
                enable: false,
                distance: 100,
                color: "#ffffff",
                opacity: 0.4,
                width: 1
            },
            move: {
                angle: {
                    value: 10,
                    offset: 0
                },
                enable: true,
                speed: 5,
                direction: "right",
                random: false,
                straight: true,
                outModes: {
                    default: "out"
                },
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            },
            zIndex: {
                value: 5,
                opacityRate: 0.5
            }
        },
        interactivity: {
            detectsOn: "canvas",
            events: {
                onHover: {
                    enable: false,
                    mode: "repulse"
                },
                onClick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 400,
                    links: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 0.8
                },
                repulse: {
                    distance: 200
                },
                push: {
                    quantity: 4,
                    groups: ["z5000", "z7500", "z2500", "z1000"]
                },
                remove: {
                    quantity: 2
                }
            }
        },
        detectRetina: true,
        background: {
            color: {backgroundColor},
            image: "",
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover"
        },
        emitters: {
            position: {
                y: 55,
                x: -30
            },
            rate: {
                delay: 7,
                quantity: 1
            },
            size: {
                width: 0,
                height: 0
            },
            particles: {
                shape: {
                    type: "images",
                    options: {
                        images: [
                            {
                                src: "https://particles.js.org/images/amongus_blue.png",
                                width: 205,
                                height: 267
                            },
                            {
                                src: "https://particles.js.org/images/amongus_cyan.png",
                                width: 207,
                                height: 265
                            },
                            {
                                src: "https://particles.js.org/images/amongus_green.png",
                                width: 204,
                                height: 266
                            },
                            {
                                src: "https://particles.js.org/images/amongus_lime.png",
                                width: 206,
                                height: 267
                            },
                            {
                                src: "https://particles.js.org/images/amongus_orange.png",
                                width: 205,
                                height: 265
                            },
                            {
                                src: "https://particles.js.org/images/amongus_pink.png",
                                width: 205,
                                height: 265
                            },
                            {
                                src: "https://particles.js.org/images/amongus_red.png",
                                width: 204,
                                height: 267
                            },
                            {
                                src: "https://particles.js.org/images/amongus_white.png",
                                width: 205,
                                height: 267
                            }
                        ]
                    }
                },
                size: {
                    value: 40
                },
                move: {
                    speed: 10,
                    outModes: {
                        default: "destroy",
                        left: "none"
                    },
                    straight: true
                },
                zIndex: {
                    value: 0
                },
                rotate: {
                    value: {
                        min: 0,
                        max: 360
                    },
                    animation: {
                        enable: true,
                        speed: 10,
                        sync: true
                    }
                }
            }
        }
    }

    return amoung
}