import { AiFillHome, AiOutlineProject } from "react-icons/ai";
import img from "../assets/navbarImg.png"
import styles from "./Layout.module.css"
import { FaArrowCircleUp, FaBlog, FaUser } from "react-icons/fa";
import { MdFiberManualRecord, MdOutlineContactMail, MdPunchClock } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

import { useEffect, useRef, useState } from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import { GrGithub } from "react-icons/gr";
import { Link } from "react-router-dom";



export default function Layout({children}) {
    const [isOpen, setIsOpen] = useState(false)
    const menuRef =useRef(null)
    const [isVisible, setIsvisible] = useState(false)

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

    useEffect(() => {
        const toggleVisiblity = () => {
            if (window.scrollY > 200) {
                setIsvisible(true)
            } else {
                setIsvisible(false)
            }
        }

        window.addEventListener("scroll" , toggleVisiblity)

        return () => {
            window.removeEventListener("scroll" , toggleVisiblity)
        }
    }, [])

    const mustScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    const toggleHandler = () => {
        setIsOpen(false)
    }

    return(
        <>
            <nav className={styles.container}>
                <div className={styles.image}>
                    <img src={img} alt="navigation image" />
                </div>
                <div className={styles.queryTexts}>
                    <Link to="/home"><AiFillHome color="black"/> <p>Home</p></Link>
                    <Link to="#"><FaUser color="black"/> <p>About Me</p></Link>
                    <Link to="/portfolio"><AiOutlineProject color="black"/> <p>Portfolio</p></Link>
                    <Link to="/blog"><FaBlog color="black"/> <p>Blog</p></Link>
                    <Link to="#"><MdOutlineContactMail color="black"/> <p>Contact</p></Link>
                </div>
                <div onClick={hamburgerMenuHandler} className={styles.hamburgerMenu}>
                    <RxHamburgerMenu/>
                </div>
                <div ref={menuRef} className={`${styles.hamburgerList} ${isOpen ? styles.open : ""}`}>
                    <p><span onClick={hamburgerMenuHandler}>X</span></p>
                    <Link onClick={toggleHandler} to="/home"><div><span><AiFillHome/></span> <p>Home</p></div></Link>
                    <Link onClick={toggleHandler} to="#"><div><span><FaUser /></span> <p>About Me</p></div></Link>
                    <Link onClick={toggleHandler} to="/portfolio"><div><span><AiOutlineProject/></span> <p>Portfolio</p></div></Link>
                    <Link onClick={toggleHandler} to="/blog"><div><span><FaBlog/></span> <p>Blog</p></div></Link>
                    <Link onClick={toggleHandler} to=""><div><span><MdOutlineContactMail/></span> <p>Contact</p></div></Link>
                    
                </div>
            </nav>
            {children}
            {isVisible && (
                <button className={styles.scrollToTop} onClick={mustScrollToTop}><FaArrowCircleUp fontSize="1.5rem" /></button>
            )}
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
                        <Link to="/portfolio"><MdFiberManualRecord />Portfolio</Link>
                        <Link to="/blog"><MdFiberManualRecord />Blog</Link>
                        <Link to="#"><MdFiberManualRecord />Contact</Link>
                    </div>
                </div>
                <p>Developed by Martin Larsen in 2025</p>
            </footer>
        </>
    )
}