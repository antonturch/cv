import style from "./MyWorks.module.css"
import {MyWork} from "./myWork/MyWork";
import styleContainer from "../common/styles/Container.module.css";
import {Title} from "../common/components/Title/Title";

export const MyWorks = () => {
    return (
        <div className={style.myWorksBlock}>
            <div className={`${styleContainer.container} ${style.myWorksContainer}`}>
                <Title title={"projects"}/>
                <div className={style.myWorks}>
                    <MyWork projTitle={"Todolist"}
                            projDescription={" lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem "}/>
                    <MyWork projTitle={"Social network"}
                            projDescription={" lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"}/>
                </div>
            </div>
        </div>
    )
}

