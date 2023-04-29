import Image from 'next/image';
import styles from '../styles/Folder.module.css';


function Folder({ title, handleClick, icon_image }) {

    return (
        <div onClick={handleClick} className={styles.icon_click_outer}>
            <div className={styles.icon_click}>
            <Image
                src={icon_image}
                width="45"
                height="45"/>
                <br/>
                {title}
                </div>
            </div>
    )

}

export default Folder;