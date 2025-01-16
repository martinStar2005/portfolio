import { useEffect, useRef, useState } from "react";
import BlogBody from "../components/BlogBody";
import BlogHeader from "../components/BlogHeader";
import { RxContainer } from "react-icons/rx";

export default function BlogPage() {
    
    return (
        <>
            <BlogHeader />
            <BlogBody />
        </>
    )
}