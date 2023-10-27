import React from "react";
import stlExp from "./Experiences.module.css";
import imgJnJ from "../../Images/johnson-johnson-4.svg"
import imgGin from "../../Images/GVI.png"
import imgSp from "../../Images/Serviparamo.png"
import imgKl from "../../Images/Klimaan.jpg"
import imgCAV from "../../Images/CAV.jpg"
import { withNamespaces } from 'react-i18next';



function Experiences({ t }) {
    return (
        <div className={stlExp.containerExp}>
            <div className={stlExp.exp}>
                <img src={imgJnJ} alt="jnj" />
                <span>{t('09/ago/2021 - 16/ene/2023')}</span>
            </div>
            <div className={stlExp.exp}>
                <img src={imgGin} alt="Gin" />
                <span>{t('21/may/2018 - 06/ago/2021')}</span>
            </div>
            <div className={stlExp.exp}>
                <img src={imgSp} alt="SP" />
                <span>{t('17/abr/2017 - 18/may/2018')}</span>
            </div>
            <div className={stlExp.exp}>
                <img src={imgKl} alt="KL" />
                <span>{t('20/ago/2014 - 11/abr/2017')}</span>
            </div>
            <div className={stlExp.exp}>
                <img src={imgCAV} alt="CAV" />
                <span>{t('18/jun/2012 - 11/abr/2014')}</span>
            </div>
        </div>
    );
}

export default withNamespaces()(Experiences);