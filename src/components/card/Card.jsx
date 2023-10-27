import React from "react";
import stlCard from "./Card.module.css";
import FotoCV from "../../Images/FotoHV.svg"
import { withNamespaces } from 'react-i18next';

function Card({ t }) {

    return (
        <div className={stlCard.containerCard}>
            <h2>{t('HOJA DE VIDA')}</h2>
            <h2>VICTOR ALEJANDRO VIDAL SILVA</h2>
            <h2>{t('INGENIERO MECATRÓNICO')}</h2>
            <h2>FULL STACK WEB DEVELOPER</h2>
            <img className={stlCard.imgFotoCV} src={FotoCV} alt="Mi imagen" />
        </div>
    );
}

export default withNamespaces() (Card);