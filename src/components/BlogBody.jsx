import styles from "./BlogBody.module.css"
import img from "../assets/PostImage.webp"
import { useState } from "react"

export default function BlogBody({scrollableRef, isScrollActived, handleComponentScroll}) {
    const [selected, setSelected] = useState(null)

    const selectHandler = (e) => {
        const selectedAlternativ = e.target.innerText.toLowerCase()
        setSelected(selectedAlternativ)
    }

    return(
        <div className={styles.BlogBody}>
            <div className={styles.blogFiltering}>
                <ul>
                    <p>Categories: </p>
                    <li className={selected === "python" ? styles.selected: styles.noSelected} onClick={selectHandler}>Python</li>
                    <li className={selected === "js" ? styles.selected: styles.noSelected} onClick={selectHandler}>Js</li>
                    <li className={selected === "frontend" ? styles.selected: styles.noSelected} onClick={selectHandler}>Frontend</li>
                    <li className={selected === "backend" ? styles.selected: styles.noSelected} onClick={selectHandler}>Backend</li>
                </ul>
            </div>
            <div className={styles.blogs}>
                <div>
                    <div>
                        <img src={img} alt="blog image" />
                        <h2>The Name of blog</h2>
                        <button>Read </button>
                    </div>
                    <div>
                        <img src={img} alt="blog image" />
                        <h2>The Name of blog</h2>
                        <button>Read </button>
                    </div>
                    <div>
                        <img src={img} alt="blog image" />
                        <h2>The Name of blog</h2>
                        <button>Read </button>
                    </div>
                    <div>
                        <img src={img} alt="blog image" />
                        <h2>The Name of blog</h2>
                        <button>Read </button>
                    </div>
                    <div>
                        <img src={img} alt="blog image" />
                        <h2>The Name of blog</h2>
                        <button>Read </button>
                    </div>
                    <div>
                        <img src={img} alt="blog image" />
                        <h2>The Name of blog</h2>
                        <button>Read </button>
                    </div>
                    <div>
                        <img src={img} alt="blog image" />
                        <h2>The Name of blog</h2>
                        <button>Read </button>
                    </div>
                    <div>
                        <img src={img} alt="blog image" />
                        <h2>The Name of blog</h2>
                        <button>Read </button>
                    </div>
                </div>
            </div>
        </div>
    )
}