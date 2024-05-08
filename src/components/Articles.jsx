import React from "react"
import { useState, useEffect } from "react"
import {getAllArticles} from "../../utils/utils"
import ArticleCard from "./ArticleCard"


function AllArticles (){
    const [allArticles, setAllArticles] = useState([])
    
    useEffect(()=>{
        getAllArticles().then((response)=>{
            console.log(response.data.articles)
            setAllArticles(response.data.articles)
        })
    }, [])
 return (
    <div>      
        
      
            {allArticles.map((article)=>(
                <ArticleCard key={article.title} article={article}/>
            ))}
        
    </div>
 )
}


export default AllArticles