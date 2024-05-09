import React from "react";
import {Link} from 'react-router-dom'



function ArticleCard({article }){

    return (
        <Link to={`/articles/${article.article_id}`} >
        <div className="ArticleCard">
            <h3>Title: {article.title}</h3>
            <h4>Author: {article.author} </h4>
            <h4>Topic: {article.topic}</h4>
            <img src={article.article_img_url} className='img'/>
        </div>
        </Link>
    )
}
export default ArticleCard