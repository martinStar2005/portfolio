import { useEffect, useRef, useState } from "react"
import img from "../assets/banner.webp"
import styles from "./banner.module.css"
import { FaArrowRight } from "react-icons/fa6"

export default function Banner() {
    const [isHoverButton, setIsHoverButton] = useState(false)

    const trueHoverButton = () => {
        console.log(isHoverButton)
        setIsHoverButton(true)
    }
    const falseHoverButton = () => {
        console.log(isHoverButton)
        setIsHoverButton(false)
    }

    return (
        <div className={styles.banner}>
            <img src={img} alt="banner image" />
            <div>
                <h1>Creating unique and creative digital experiences!</h1>
                <p>I'm Martin Larsen, a web developer with experiences in crafting fast, beautiful, and responsive websites. Let's build something amazing together.</p>
                <a href="#">
                    <span className={`${styles.icon} ${isHoverButton ? styles.show : ""}`}><FaArrowRight /></span>
                    <p onMouseEnter={trueHoverButton} onMouseLeave={falseHoverButton}>More About Me</p>
                </a>
            </div>
        </div>
    )
}