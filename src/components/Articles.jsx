import React from "react"
import { useState, useEffect } from "react"
import { getAllArticles } from "../../utils/utils"
import ArticleCard from "./ArticleCard"
import Home from "./Home"


function AllArticles() {
    const [allArticles, setAllArticles] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getAllArticles().then((response) => {
            setLoading(false)
            setAllArticles(response.data.articles)
        })
    }, [])

    if (loading) {
        return <p>Loading...</p>
    }

    return (
        <>
            <Home />
            {allArticles.map((article) => (
                <ArticleCard classname="article-container" key={article.id} article={article} />
            ))}

        </>
    )
}


export default AllArticles