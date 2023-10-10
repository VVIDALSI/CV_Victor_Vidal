import React from "react";
import stlProfile from "./Profile.module.css";
import FotoCV from "../../Images/FotoHV.svg"


export default function Profile() {
    return (
        <div className={stlProfile.containerProfile}>
            <div className={stlProfile.profile}>
                <img className={stlProfile.imgFotoCV} src={FotoCV} alt="Mi imagen" />
                <div>
                    <h2>Perfil profesional:</h2>
                    <p>
                        Soy un ingeniero mecatrónico con más de 11 años de experiencia en gerencia de proyectos bajo la metodología PMI, proyectos HVAC y proyectos de robótica, así como en diseño industrial en sistemas CAD 2D y 3D.<br /><br />

                        Mi experiencia me ha permitido desarrollar habilidades en liderazgo, gestión de proyectos y trabajo en equipo. Soy una persona proactiva, analítica y creativa, capaz de encontrar soluciones innovadoras y eficientes para cada proyecto en el que participo. Además, recientemente he obtenido una certificación como desarrollador web full stack, lo que me ha permitido diversificar mis competencias y abordar proyectos tecnológicos de manera integral.
                    </p>
                </div>
            </div>
        </div>
    );
}