import Particles from "react-particles";

const Particle = ({option,init,loaded}) =>{
    return(
        <>
        <Particles id="tsparticles" options={option} init={init} loaded={loaded}/>
        </>
    )
}

export default Particle