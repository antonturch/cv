import style from "./Title.module.css";
import React, {FC} from "react";

type TitlePropsType = {
    title: string
}

export const Title: FC<TitlePropsType> = ({title}) => {
    return (
        <div className={style.title}>
            <h2>{title}</h2>
        </div>
    )
}