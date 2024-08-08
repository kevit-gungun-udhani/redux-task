import { useDispatch, useSelector, } from "react-redux";
import { useRef } from "react";
import Reply from "./Reply";
import { commentActions } from "../store/comment-slice";
import generateId from "../utility/GenerateId";

export default function ShowComment({ comment }) {
    const input = useRef('')
    const dispatch = useDispatch();
  
    function handleReply(commentId, isVisible) {
      let obj = {
        commentId
      }
      if(isVisible){
        const replyId = generateId();
        const data = input.current.value;
        obj = {
          commentId,
          ...(data) && {
            replyId,
            data
          }
        }
      }
      dispatch(commentActions.toggle(obj));
    }

    function handleDelete(commentId){
      dispatch(commentActions.deleteComment(commentId))
    }
    return (
        <>
            {comment.map((comment) => {
                return (
                  <div key={comment.commentId}>
                    <p>{comment.comment}</p>
                    {comment.chat.length > 0 && (
                      <Reply chat={comment.chat}/>
                    )}
                    <div>
                      <button onClick={() => {
                        handleReply(comment.commentId, comment.isVisible);
                      }}>Reply</button>
                      {comment.isVisible && <input type="text" autoFocus ref={input} />}
                      <button onClick={() => {
                        handleDelete(comment.commentId);
                      }}>Delete</button>
                    </div>
                  </div>
                );
            })}
        </>
    )
}