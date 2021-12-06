import style from "./Projects.module.css"
import {Project} from "./project/Project";
import styleContainer from "../common/styles/Container.module.css";
import {Title} from "../common/components/Title/Title";

export const Projects = () => {
    return (
        <div className={style.myWorksBlock}>
            <div className={`${styleContainer.container} ${style.myWorksContainer}`}>
                <Title title={"projects"}/>
                <div className={style.myWorks}>
                    <Project projTitle={"Todolist"}
                             projDescription={" lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem "}/>
                    <Project projTitle={"Social network"}
                             projDescription={" lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"}/>
                </div>
            </div>
        </div>
    )
}

