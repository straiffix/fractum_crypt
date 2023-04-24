import styles from '../styles/FullPost.module.css';
import ReactMarkdown from 'react-markdown'

function FullPost({ title, text }){
    
    return (
        <div className={styles.shortpost}>
            <div className={styles.shortpostheader}>{title}
            </div>
            <div className={styles.shortpostcontent}>
            <ReactMarkdown>{text}</ReactMarkdown>
            </div>
        </div>

    );
}

export default FullPost;

