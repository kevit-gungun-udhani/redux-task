import { useDispatch, useSelector } from "react-redux"
import { chatActions } from "../store/chat-slice"
import { userActions } from "../store/userAction-slice";
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


    return (
      <>
        <button onClick={handleReply}>Reply</button>
        {isVisible && <input type="text" ref={input}></input>}
        <button>Delete</button>
      </>
    );
}