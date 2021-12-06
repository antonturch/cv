import React from "react";
import style from "./Project.module.css"

type MyWorkPropsType = {
    projTitle: string
    projDescription: string
}
export const Project: React.FC<MyWorkPropsType> = ({projTitle, projDescription}) => {
    return (
        <div className={style.proj}>
            <div className={style.imgContainer}>
                <img src="" alt=""/>
                <button>Watch</button>
            </div>
            <div className={style.projInfo}>
                <h3 className={style.projTitle}>{projTitle}</h3>
                <span className={style.projDescription}>{projDescription}</span>
            </div>
        </div>
    )
}