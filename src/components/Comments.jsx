import { getArticleComments } from "../../utils/utils"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import CommentCard from "./CommentCard"

function Comments (){
    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const {article_id} = useParams()


    useEffect(()=>{
        getArticleComments(article_id).then((response)=>{
            setLoading(false)
            setComments(response.data.comments)
        }).catch((error)=>{
            setLoading(false)
            setError('Error fetching comments')
            console.log('Error fetching comment:', error)
        })
    },[article_id])

    if (loading){
        return <p>Loading...</p>
    }
    if (error){
        return <p>{error}</p>
    }


    return (
        <>
        {comments.map(comment =>( 
        <CommentCard key={comment.comment_id} comment={comment}/>
        ))}
        </>
    )
}

export default Comments