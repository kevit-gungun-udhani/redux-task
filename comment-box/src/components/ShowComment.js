import { useDispatch, useSelector } from "react-redux";
import Reply from "./Reply";
import { commentActions } from "../store/comment-slice";

export default function ShowComment({ comment }) {
    const input = useRef()
    const dispatch = useDispatch();
    function handleReply(commentId) {
      dispatch(commentActions.toggle(commentId));
      if () {
        dispatch(
        commentActions.addReply({
          reply: input.current.value,
        }))
      }
      ;
    }
    return (
        <>
            {comment.map((comment) => {
                return (
                  <div key={comment.commentId}>
                    <p>{comment.comment}</p>
                    {comment.chat.length > 0 && (
                      <Reply comment={comment.chat} />
                    )}
                    <div>
                      <button onClick={() => {
                        handleReply(comment.commentId);
                      }}>Reply</button>
                      {comment.isVisible && <input type="text" autoFocus ref={input}/>}
                      <button>Delete</button>
                    </div>
                  </div>
                );
            })}
        </>
    )
}