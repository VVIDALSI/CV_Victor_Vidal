import React from "react";
import stlReferences from "../references/References.module.css";


export default function References() {
    return (
        <div className={stlReferences.containerReferences}>
            <div className={stlReferences.referencesInf}>

                <div className={stlReferences.profRef}>

                    <div>
                        <h2>Referencia Laboral:</h2>
                    </div>
                    
                    <div>
                        <h3>Alvaro Mauricio Rojas</h3>
                        <p>Johnson & Johnson</p>
                        <p>Colombia - Cali, Valle del Cauca</p>
                        <p>Ingeniero de mantenimiento</p>
                        <p>Celular: 322 248 6948</p>
                    </div>
                </div>

                <div className={stlReferences.perRef}>

                    <div>
                        <h2 >Referencias personales:</h2>
                    </div>

                    <div className={stlReferences.contRefPer}>
                        <div className={stlReferences.perRef1}>
                            <h3>Elmer Alejandro Vidal</h3>
                            <p>Cali - Colombia</p>
                            <p>Ingeniero de sistemas</p>
                            <p>Celular: 317 704 3880</p>
                        </div>
                        <div className={stlReferences.perRef2}>
                            <h3>Diego Arturo Perez</h3>
                            <p>Cali - Colombia</p>
                            <p>Ingeniero mecatrónico</p>
                            <p>Celular: 317 809 2703</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}