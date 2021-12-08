import React from "react";
import styles from "./Project.module.css"

type MyWorkPropsType = {
    projTitle: string
    projDescription: string
    style: {backgroundImage: string}
}
export const Project: React.FC<MyWorkPropsType> = ({projTitle, projDescription, style}) => {
    return (
        <div className={styles.proj}>
            <div className={styles.imgContainer} style={style}>
                <img src="" alt=""/>
                <button className={styles.viewBnt}>Watch</button>
            </div>
            <div className={styles.projInfo}>
                <h3 className={styles.projTitle}>{projTitle}</h3>
                <span className={styles.projDescription}>{projDescription}</span>
            </div>
        </div>
    )
}