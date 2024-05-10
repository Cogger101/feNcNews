import React from "react";

function CommentCard ({comment}){

    let votes = comment.votes
    
    let voteType = votes < 0 ? "dislikes" : "likes";
    return (
    
        <div className="CommentCard">
            <h3>{comment.author}: {comment.body}</h3>
            <h4>{votes} {voteType}</h4>
            <h5>Created: {comment.created_at}</h5>
        </div>
    
    )
}

export default CommentCard