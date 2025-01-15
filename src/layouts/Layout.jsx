import { AiFillHome, AiOutlineProject } from "react-icons/ai";
import img from "../assets/navbarImg.png"
import styles from "./Layout.module.css"
import { FaBlog, FaUser } from "react-icons/fa";
import { MdOutlineContactMail } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

import { useEffect, useRef, useState } from "react";



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
                    <a href="#"><AiFillHome color="black"/> <p>Home</p></a>
                    <a href="#"><FaUser color="black"/> <p>About Me</p></a>
                    <a href="#"><AiOutlineProject color="black"/> <p>Portfolio</p></a>
                    <a href="#"><FaBlog color="black"/> <p>Blog</p></a>
                    <a href="#"><MdOutlineContactMail color="black"/> <p>Contact</p></a>
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
        </>
    )
}