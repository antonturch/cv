import style from "./MyWorks.module.css"
import {MyWork} from "./myWork/MyWork";
import styleContainer from "../common/styles/Container.module.css";

export const MyWorks = () => {
    return (
        <div className={style.myWorksBlock}>
            <div className={`${styleContainer.container} ${style.myWorksContainer}`}>
                <h3 className={style.title}>My works</h3>
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
