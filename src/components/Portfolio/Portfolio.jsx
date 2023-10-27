import React from "react";
import imgSnK from "../../Images/Logo White.png"
import stlPortfolio from "./Portfolio.module.css"
import { withNamespaces } from 'react-i18next';


function Portfolio({t}) {
    const openVideoInNewTab = () => {
        const videoUrl = "https://www.youtube.com/watch?v=skCbK21GJIA&t=4s";
        window.open(videoUrl, "_blank");
    };


    return (
        <div className={stlPortfolio.contPortfolio}>


            <div className={stlPortfolio.linkProject} onClick={openVideoInNewTab}>
                <span>Strings & Keys</span>
                <img src={imgSnK} alt="SnK" />
                <span>{t('01/ago/2023 - 08/sep/2023')}</span>
            </div>


        </div>
    );
}

export default withNamespaces()(Portfolio);