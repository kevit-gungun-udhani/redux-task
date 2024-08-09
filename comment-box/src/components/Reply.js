import { useDispatch } from "react-redux";
import { commentActions } from "../store/comment-slice";
import classes from './Reply.module.css';

export default function Reply({ chat, commentId }) {
  const dispatch = useDispatch();
  function handleDelete(replyId, commentId) {
    dispatch(commentActions.deleteReply(
      {
        replyId,
        commentId
      }
    ))
  }
  return (
    <>
      {chat.map((reply) => {
        return (
          <div key={reply.replyId} className={classes.replyBox}>
            <span>{reply.data}</span>
            <button
              onClick={() => {
                handleDelete(reply.replyId, commentId);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </>
  );
}