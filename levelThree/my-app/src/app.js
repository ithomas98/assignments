import React from "react"
import Navbar from "./components/navbar"
import Header from "./components/header"
import BlogList from "./components/bloglist"

export default function App(){
    return(
        <div>
            <Header />
                <Navbar />
                <BlogList />
        </div>
    )
}