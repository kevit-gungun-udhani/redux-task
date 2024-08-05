import { useDispatch, useSelector } from "react-redux"
import { chatActions } from "../store/chat-slice"
import { userActions } from "../store/userAction-slice";
export default function UserActions(){
    const dispatch = useDispatch();
    const isVisible = useSelector(state => state.userAction.isVisible)
    function handleReply(){
        dispatch(chatActions.reply('iam'));
        dispatch(userActions.userReply());
    }

    function handleDelete(){
        dispatch(chatActions.delete());
        dispatch(userActions.userDelete());
    }

    return (
        <>
            <button onClick={handleReply}>Reply</button>
            {isVisible && <input type="text"></input>}
            <button onClick={handleDelete}>Delete</button>
        </>
    )
}