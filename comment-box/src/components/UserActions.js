import { useDispatch, useSelector } from "react-redux"
import { chatActions } from "../store/chat-slice"
import { userActions } from "../store/userAction-slice";
import { inputActions } from "../store/input-slice";
import { useRef } from "react";
export default function UserActions({ index }) {
    const input = useRef();
    const dispatch = useDispatch();
    const isVisible = useSelector(state => state.userAction.isVisible[index])

  function handleReply() {
    if (isVisible) {
          const userInput = input.current.value;
      if (userInput.trim() !== "") {
            dispatch(
              chatActions.reply({
                index: index,
                reply: userInput,
              })
            );
          }
          input.current.value = "";
          dispatch(userActions.userReply(index));
        } else {
          dispatch(userActions.userReply(index));
        }
        
        
    }

    function handleDelete(){
      dispatch(inputActions.handleDelete({
        index: index
      }))
      dispatch(chatActions.delete({
        index: index
      }))
    }

    return (
      <>
        <div>
          <button onClick={handleReply}>Reply</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
        {isVisible && <input type="text" ref={input}></input>}
      </>
    );
}