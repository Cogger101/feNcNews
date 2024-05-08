import axios from 'axios'

const ncNewsApiMain = axios.create({
    baseURL: `https://seans-nc-news-project.onrender.com/`
})

export function getAllArticles(){
    return ncNewsApiMain.get(`api/articles`)
    }
