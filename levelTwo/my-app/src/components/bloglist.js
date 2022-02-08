import React from "react"
import BlogPost from "./blogpost"
import postData from "./data"

export default function BlogList(){
    const posts = postData.map(item =>{
        return <BlogPost key={item.id} item={item}/>
    })
    return(
        <div className="blogList">
            {posts}
        </div>
    )
}