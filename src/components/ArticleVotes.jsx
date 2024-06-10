import { useState } from "react"
import { patchVotes } from "../../utils/utils"

function ArticleVotes ({article, currVotes}){
    const [votes, setVotes] = useState(0)
    console.log(article)
    // const articleId = article.article_id
    // const handleVote =  (vote)=>{
    //     setVotes(votes + vote)
    //     patchVotes(articleId, vote)
    // }

    return (
        <>
        <button className="like-btn" onClick={()=>handleVote(1)}> Like</button>
        <button className="dislike-btn" onClick={()=>handleVote(-1)}> Dislike</button>
        </>
    )
}
export default ArticleVotes