import { useEffect, useState } from "react"
import { getArticleById } from "../../utils/utils"
import { useParams } from "react-router-dom"
import Home from "./Home"
import Comments from "./Comments"


function SingleArticle(){
    const [article, setArticle] = useState()
    const [loading, setLoading] = useState(true)
    const {article_id} = useParams()

    useEffect(()=>{
        getArticleById(article_id).then((response)=>{
            setLoading(false)
            setArticle(response.data.article)
        })
    },[article_id])

    if (loading){
        return <p>Loading...</p>
    }

    return (
        <>   
            <Home />
            <div className="SingleArticle">
            {article && <h2>{article.title}</h2> 
            }
            {article && <h3>Created: {article.created_at}</h3> 
            }
            {article && <img src={article.article_img_url} className='SingleArticleImg'/>
            }
            {article && <h3>{article.topic}</h3>}
            {article && <h3>Description: {article.body}</h3>}
            {article && <h3>Created by: {article.author}</h3> 
            }
            {article && <h3>{article.votes} likes</h3> 
            }
            </div>
            <Comments article_id={article_id}/>
        </>
    )
}

export default SingleArticle