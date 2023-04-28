import Image from 'next/image';
import styles from '../styles/Folder.module.css';


function Folder({ title, handleClick }) {

    return (
        <div onClick={handleClick} className={styles.icon_click_outer}>
            <div className={styles.icon_click}>
            <Image
                src="/folder_dark.png" 
                width="45"
                height="45"/>
                <br/>
                {title}
                </div>
            </div>
    )

}

export default Folder;