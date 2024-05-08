import React from "react";
import { useState } from "react";

function ArticleCard({article}){
    return (
        <div className="HomeArticleCard">
            <h3>Title: {article.title}</h3>
            <h4>Author: {article.author} </h4>
            <h4>Topic: {article.topic}</h4>
        </div>
    )
}
export default ArticleCard