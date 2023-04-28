import styles from '../styles/ShortPost.module.css';
// import ReactMarkdown from 'react-markdown'
import parse from 'html-react-parser';

function FullPost({ title, text }){
    
    return (
        <div className={styles.shortpost}>
            <div className={styles.shortpostheader}>{title}
            </div>
            <div className={styles.shortpostcontent}>
            {parse(text)}
            </div>
        </div>

    );
}

export default FullPost;

