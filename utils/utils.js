import axios from 'axios'

const ncNewsApiMain = axios.create({
    baseURL: `https://seans-nc-news-project.onrender.com/`
})

export function getAllArticles(){
    return ncNewsApiMain.get(`api/articles`)
    }

export function getArticleById(article_id){
    return ncNewsApiMain.get(`api/articles/${article_id}`)
    }

export function getArticleComments(article_id){
    return ncNewsApiMain.get(`/api/articles/${article_id}/comments`)
}

export function patchVotes(article_id, updatedVotes){
    return ncNewsApiMain.patch(`api/articles/${article_id}`, updatedVotes)
}