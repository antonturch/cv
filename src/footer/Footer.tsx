import style from "./Footer.module.css"
import styleContainer from "../common/styles/Container.module.css";
import {Title} from "../common/components/Title/Title";

export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <Title title={"tyronchik anton"}/>
                <div className={style.footerDiv}>
                    <div className={style.footerDivItems}></div>
                    <div className={style.footerDivItems}></div>
                    <div className={style.footerDivItems}></div>
                    <div className={style.footerDivItems}></div>
                </div>
                <span className={style.footerTitle}>2021, все права защищены</span>
            </div>
        </div>
    )
}