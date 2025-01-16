import { AiFillHome, AiOutlineProject } from "react-icons/ai";
import img from "../assets/navbarImg.png"
import styles from "./Layout.module.css"
import { FaBlog, FaUser } from "react-icons/fa";
import { MdFiberManualRecord, MdOutlineContactMail, MdPunchClock } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

import { useEffect, useRef, useState } from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import { GrGithub } from "react-icons/gr";
import { Link } from "react-router-dom";



export default function Layout({children}) {
    const [isOpen, setIsOpen] = useState(false)
    const menuRef =useRef(null)
    const hamburgerMenuHandler = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setIsOpen(false)
            }
        } 
        document.addEventListener("mousedown", handleClickOutside)

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    return(
        <>
            <nav className={styles.container}>
                <div className={styles.image}>
                    <img src={img} alt="navigation image" />
                </div>
                <div className={styles.queryTexts}>
                    <Link to="/home"><AiFillHome color="black"/> <p>Home</p></Link>
                    <Link to="#"><FaUser color="black"/> <p>About Me</p></Link>
                    <Link to="#"><AiOutlineProject color="black"/> <p>Portfolio</p></Link>
                    <Link to="#"><FaBlog color="black"/> <p>Blog</p></Link>
                    <Link to="#"><MdOutlineContactMail color="black"/> <p>Contact</p></Link>
                </div>
                <div onClick={hamburgerMenuHandler} className={styles.hamburgerMenu}>
                    <RxHamburgerMenu/>
                </div>
                <div ref={menuRef} className={`${styles.hamburgerList} ${isOpen ? styles.open : ""}`}>
                    <p><span onClick={hamburgerMenuHandler}>X</span></p>
                    <div><span><AiFillHome/></span> <p>Home</p></div>
                    <div><span><FaUser /></span> <p>About Me</p></div>
                    <div><span><AiOutlineProject/></span> <p>Portfolio</p></div>
                    <div><span><FaBlog/></span> <p>Blog</p></div>
                    <div><span><MdOutlineContactMail/></span> <p>Contact</p></div>
                    
                </div>
            </nav>
            {children}
            <footer className={styles.footer}>
                <div>
                    <div className={styles.socialMedia}>
                        <img src={img} alt="footer image" />
                        <div>
                            <p>SOCIAL MEDIA:</p>
                            <div>
                                <button><FaInstagram /></button>
                                <button><GrGithub /></button>
                                <button><FaLinkedin /></button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.component}>
                        <p>Website's components:</p>
                        <Link to="/home"><MdFiberManualRecord />Home</Link>
                        <Link to="#"><MdFiberManualRecord />About Me</Link>
                        <Link to="#"><MdFiberManualRecord />Portfolio</Link>
                        <Link to="#"><MdFiberManualRecord />Blog</Link>
                        <Link to="#"><MdFiberManualRecord />Contact</Link>
                    </div>
                </div>
                <p>Developed by Martin Larsen in 2025</p>
            </footer>
        </>
    )
}