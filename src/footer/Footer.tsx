import style from "./Footer.module.css"
import styleContainer from "../common/styles/Container.module.css";

export const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h3 className={style.footerTitle}>Турончик Антон</h3>
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