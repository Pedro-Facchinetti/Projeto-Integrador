import React from "react";
import styles from './Anamnese.module.scss'

import InputTextBig from "../../Components/InputTextBig";



function Anamnese(props) {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.container_content}>
                    <InputTextBig placeholder={"Motivo da consulta:"}/>
                </div>
            </div>
        </div>
    )
}

export default Anamnese;
