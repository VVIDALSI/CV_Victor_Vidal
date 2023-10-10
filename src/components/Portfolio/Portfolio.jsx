import React, { useState } from "react";
import imgSnK from "../../Images/Logo White.png"
// import vdSnK from "../../Videos/StringsAndKeys.mp4"
import stlPortfolio from "./Portfolio.module.css"


export default function Portfolio() {

    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className={stlPortfolio.contPortfolio}>


            <div className={stlPortfolio.linkProject} onClick={openModal}>
                <span>Strings & Keys</span>
                <img src={imgSnK} alt="SnK" />
                <span>01/ago/2023 - 08/sep/2023</span>
            </div>

            {modalOpen && (
                <div className={stlPortfolio.modal}>
                    <div className={stlPortfolio.modalContent}>
                        <span className={stlPortfolio.closeButton} onClick={closeModal}>
                            &times;
                        </span>
                        <iframe
                            width="560"
                            height="315"
                            src="https://youtu.be/skCbK21GJIA"
                            title="SPA Strings and Keys"
                            frameborder="0"
                            allowfullscreen
                        ></iframe>
                    </div>
                </div>
            )}

        </div>
    );
}