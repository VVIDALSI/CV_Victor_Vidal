import React from "react";
import stlSM from "./SocialMedia.module.css";
import imgWhatsApp from "../../Images/whatsapp.png"
import imgLinkedin from "../../Images/linkedin.png"
import imgElEmpleo from "../../Images/elEmpleo.svg"
import imgPhone from "../../Images/telefono.png"
import imgEmail from "../../Images/email.png"

export default function SocialMedia() {
    return (
        <div className={stlSM.containerSM}>
            <ul>
                <li>
                    <a href="mailto:victor_ale.vidal@hotmail.com"><img src={imgEmail} alt="" /></a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="tel:+573168511206"><img src={imgPhone} alt="" /></a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="https://wa.me/573168511206?text=Cordial%20saludo,%20lo%20estamos contactando%20porque%20vimos%20la%20pagina%20web%20de%20su%20Hoja%20de%20vida"><img src={imgWhatsApp} alt="" /></a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/victor-alejandro-vidal-silva-85b373192/"><img src={imgLinkedin} alt="" /></a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="https://www.elempleo.com/co/hoja-de-vida"><img src={imgElEmpleo} alt="" /></a>
                </li>
            </ul>
        </div>
    )
}

