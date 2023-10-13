import React, { useState } from "react";
import imgSnK from "../../Images/Logo White.png"
import stlPortfolio from "./Portfolio.module.css"


export default function Portfolio() {
    const openVideoInNewTab = () => {
        const videoUrl = "https://vimeo.com/874230497?share=copy"; // Cambia esta URL por la del video que desees abrir
        window.open(videoUrl, "_blank");
    };


    return (
        <div className={stlPortfolio.contPortfolio}>

            <div className={stlPortfolio.linkProject} onClick={openModal}>
                <span>Strings & Keys</span>
                <img src={imgSnK} alt="SnK" />
                <span>01/ago/2023 - 08/sep/2023</span>
            </div>

        </div>
    );
}