import React from "react";
import stlProfile from "./Profile.module.css";
import FotoCV from "../../Images/FotoHV.svg"
import { withNamespaces } from 'react-i18next';


function Profile({ t }) {
    return (
        <div className={stlProfile.containerProfile}>
            <div className={stlProfile.profile}>
                <img className={stlProfile.imgFotoCV} src={FotoCV} alt="Mi imagen" />
                <div>
                    <h2>{t('Perfil profesional:')}</h2>
                    <p>{t('Def Perfil profesional 1')}</p>
                    <p>{t('Def Perfil profesional 2')}</p>
                </div>
            </div>
        </div>
    );
}

export default withNamespaces()(Profile);