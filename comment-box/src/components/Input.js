import {useDispatch, useSelector} from 'react-redux'
import { useRef } from 'react';
import { inputActions } from '../store/input-slice';
import ShowComment from './ShowComment';

export default function Input(){
    const dispatch = useDispatch();
    const userInput = useSelector((state) => state.input.userInput)
    const input = useRef();

    function handleSubmit(){
        dispatch(inputActions.handleInput({
            userInput: input.current.value
        }));
        input.current.value = "";
    }

    if(userInput.length > 0){
        localStorage.setItem("Comment", JSON.stringify(userInput));
    }

    const isCommentAvailable = JSON.parse(localStorage.getItem("Comment"))

    return (
        <div>
            <input type="text" placeholder="Add your comment" ref={input}/>
            <button onClick={handleSubmit}>Submit</button>
            {isCommentAvailable && <ShowComment/>}
        </div>
    )
}