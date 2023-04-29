import styles from '../styles/Window.module.css';
import Draggable from "react-draggable";

function Window({ handleWindowClose, header, children  }) {
    console.log(children)
    return (
    <Draggable><div className={styles.shortpost}>
    <div className={styles.shortpostheader}>{header}<button className={styles.closebutton} onClick={handleWindowClose}>X</button></div>
        <div className={styles.shortpostcontent}>
             
            {children}
        </div>
    </div>
    </Draggable>)
}

export default Window;

