import React from "react";
import imgHTML from "../../Images/HTML.png"
import imgCSS from "../../Images/CSS3.svg"
import imgJS from "../../Images/Fundamentos_de_JavaScript.png"
import imgGit from "../../Images/Control_de_Versiones_y_Git.png"
import imgAcad from "../../Images/autocad-2016-seeklogo.com.svg"
import imgInventor from "../../Images/LogoInventor.svg"
import imgReact from "../../Images/React.png"
import imgNode from "../../Images/NodeJS.svg"
import imgRedux from "../../Images/Redux.png"
import stlSkills from "./Skill.module.css"
import { withNamespaces } from 'react-i18next';


function Skills({ t }) {
    return (
        <div className={stlSkills.sklContainer}>
            <div className={stlSkills.devSkills}>
                <div className={stlSkills.skl}>
                    <img src={imgHTML} alt="html" />
                    <span>HTML</span>
                </div>
                <div className={stlSkills.skl}>
                    <img src={imgCSS} alt="CSS" />
                    <span>CSS</span>
                </div>
                <div className={stlSkills.skl}>
                    <img src={imgJS} alt="JS" />
                    <span>JavaScript</span>
                </div>
                <div className={stlSkills.skl}>
                    <img src={imgReact} alt="React" />
                    <span>React</span>
                </div>
                <div className={stlSkills.skl}>
                    <img src={imgRedux} alt="Redux" />
                    <span>Redux</span>
                </div>
                <div className={stlSkills.skl}>
                    <img src={imgNode} alt="Node JS" />
                    <span>Node JS</span>
                </div>
                <div className={stlSkills.skl}>
                    <img src={imgGit} alt="Git" />
                    <span>GIT</span>
                </div>
            </div>
            <div className={stlSkills.engSkills}>
                <div className={stlSkills.skl}>
                    <img src={imgAcad} alt="AutoCAD 2D y 3D" />
                    <span>{t('AutoCAD 2D y 3D')}</span>
                </div>
                <div className={stlSkills.skl}>
                    <img src={imgInventor} alt="Inventor" />
                    <span>Autodesk Inventor</span>
                </div>
            </div>
        </div>
    );
}

export default withNamespaces()(Skills);