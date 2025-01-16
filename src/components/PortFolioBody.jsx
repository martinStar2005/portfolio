import styles from "./PortFolioBody.module.css"
import img from "../assets/portFolioImg.png"
import { FaArrowRight } from "react-icons/fa6"
import { CgArrowRight } from "react-icons/cg"

export default function PortFolioBody() {
    return(
        <div className={styles.portFolioBody}>
            <div>
                <span>1</span>
                <img src={img} alt="PortFolio image" />
                <div>
                    <h1>Website's title</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam sit maiores beatae quam neque iure nesciunt sequi maxime numquam cumque quibusdam veritatis facere alias sapiente at cum, delectus consectetur obcaecati.</p>
                    <span>training code</span>
                    <div>
                        <p>Used Skills <CgArrowRight/></p>
                        <div>
                            <span>Javascript</span>
                            <span>Python</span>
                            <span>Django</span>
                            <span>React</span>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <span>2</span>
                <img src={img} alt="PortFolio image" />
                <div>
                    <h1>Website's title</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam sit maiores beatae quam neque iure nesciunt sequi maxime numquam cumque quibusdam veritatis facere alias sapiente at cum, delectus consectetur obcaecati.</p>
                    <span>type of website</span>
                    <div>
                        <p>Used Skills <CgArrowRight/></p>
                        <div>
                            <span>Javascript</span>
                            <span>Python</span>
                            <span>Django</span>
                            <span>React</span>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <span>3</span>
                <img src={img} alt="PortFolio image" />
                <div>
                    <h1>Website's title</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam sit maiores beatae quam neque iure nesciunt sequi maxime numquam cumque quibusdam veritatis facere alias sapiente at cum, delectus consectetur obcaecati.</p>
                    <span>type of website</span>
                    <div>
                        <p> Used Skills <CgArrowRight/></p>
                        <div>
                            <span>Javasdadadcript</span>
                            <span>Python</span>
                            <span>Django</span>
                            <span>React</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}