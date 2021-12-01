import style from "./Contacts.module.css"
import styleContainer from "../common/styles/Container.module.css";

export const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h3 className={style.contactsTitle}>Contacts</h3>
                <form className={style.contactsForm} action="">
                    <input type="text"/>
                    <input type="text"/>
                    <textarea ></textarea>
                    <button type={"submit"} className={style.contactsButton}>Send</button>
                </form>
            </div>
        </div>
    )
}