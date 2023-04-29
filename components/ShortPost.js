import styles from '../styles/ShortPost.module.css';

function ShortPost({ post_id, post }){

    console.log(post.text)
    
    return (
        <div className={styles.shortpost}>
            <div className={styles.shortpostheader}><b>{post.title} </b>
            <div style={{float: "right"}}>{post.author}&ensp;<i>{post.DateStamp}</i></div>
            </div>
            <div className={styles.shortpostcontent}>
            
            <p> {post.shorttext }</p>
            <form><button type="submit" formAction={post_id} className={styles.shortpostbutton}>Read more</button></form>
            </div>
        </div>

    );
}

export default ShortPost;

