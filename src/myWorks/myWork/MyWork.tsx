import React from "react";
import style from "./MyWork.module.css"

type MyWorkPropsType = {
    projTitle: string
    projDescription: string
}
export const MyWork: React.FC<MyWorkPropsType> = ({projTitle, projDescription}) => {
    return (
        <div className={style.myWork}>
            <div className={style.imgContainer}>
                <img src="" alt=""/>
                <button>Watch</button>
            </div>
            <h4>{projTitle}</h4>
            <span>{projDescription}</span>
        </div>
    )
}