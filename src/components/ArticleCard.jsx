import React from "react";
import { Link } from 'react-router-dom'
import ArticleVotes from "./ArticleVotes";



function ArticleCard({ article }) {

    return (
        <>
            <Link to={`/articles/${article.article_id}`} >
                <div className="ArticleCard">
                    <h3>Title: {article.title}</h3>
                    <h4>Author: {article.author} </h4>
                    <h4>Topic: {article.topic}</h4>
                    <img src={article.article_img_url} className='img' /> <h4 className="articleVotes">{article.votes}</h4>
                </div>
            </Link>
            <ArticleVotes article={article} />
        </>
    )
}
export default ArticleCard