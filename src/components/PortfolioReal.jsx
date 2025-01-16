import { FaSmile } from "react-icons/fa"
import styles from "./Portfolio.module.css"
import Posts from "./Posts"
import { Link } from "react-router-dom"

export default function Portfolio() {
    return(
        <div className={styles.Portfolio}>
            <div>
                <h1>
                    Could you please take a look at my new projects?  
                    <FaSmile />
                </h1>
                    <Link to="/portfolio">
                        <button>My Portfolio</button>
                    </Link>
            </div>
        </div>  
    )
}