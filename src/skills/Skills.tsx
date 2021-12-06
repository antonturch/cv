import React from "react";
import style from "./Skills.module.css"
import styleContainer from "./../common/styles/Container.module.css"
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/Title/Title";

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title={"Skills"}/>
                <div className={style.skills}>
                    <Skill title={"JS"} description={"My 1st skill"}/>
                    <Skill title={"CSS"} description={"My 2nd skill"}/>
                    <Skill title={"React"} description={"My 3rd skill"}/>
                </div>
            </div>
        </div>
    )
}