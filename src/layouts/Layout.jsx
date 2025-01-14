import img from "../assets/navbarImg.png"
import styles from "./Layout.module.css"


export default function Layout() {
    return(
        <>
            <nav className={styles.container}>
                <img src={img} alt="navigation image" />
                <div>
                    <p>Home</p>
                    <p>About Me</p>
                    <p>Portfolio</p>
                    <p>Blog</p>
                    <p>Contact</p>
                </div>
            </nav>
        </>
    )
}