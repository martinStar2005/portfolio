import styles from "./Posts.module.css"
import img from "../assets/PostImage.webp"

export default function Posts() {
    return (
        <div className={styles.post}>
            <div>
                <div className={styles.details}>
                    <h1>The Recently Posts</h1>
                    <p>You can see our new blog by clicking on the Post below...</p>
                </div>
                <div className={styles.image}>
                    <div>
                        <img src={img} alt="Posts image" />
                        <p>How to Learn Python</p>
                    </div>
                    <div>
                        <img src={img} alt="Posts image" />
                        <p>How to Learn CSS</p>
                    </div>
                    <div>
                        <img src={img} alt="Posts image" />
                        <p>How to Learn Java Scripts</p>
                    </div>
                </div>
            </div>
        </div>
    )
}