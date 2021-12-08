import styles from "./Projects.module.scss"
import {Project} from "./project/Project";
import styleContainer from "../common/styles/Container.module.css";
import {Title} from "../common/components/Title/Title";
import todoImg from "../assets/image/photo_2021-11-08_20-50-45.jpg"
import socialImg from "../assets/image/photo_2021-11-08_20-56-48.jpg"

export const Projects = () => {

    const todoStyle = {
        backgroundImage: `url(${todoImg})`,
    }
    const socialStyle = {
        backgroundImage: `url(${socialImg})`,
    }

    return (
        <div className={styles.projsBlock}>
            <div className={`${styleContainer.container} ${styles.projsContainer}`}>
                <Title title={"projects"}/>
                <div className={styles.projs}>
                    <Project projTitle={"Todolist"}
                             projDescription={" lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem "}
                             style={todoStyle}/>
                    <Project projTitle={"Social network"}
                             projDescription={" lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"}
                             style={socialStyle}/>
                </div>
            </div>
        </div>
    )
}

