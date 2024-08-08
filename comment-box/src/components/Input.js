import {useDispatch} from 'react-redux'
import { useRef } from 'react';
import { commentActions } from '../store/comment-slice';
import generateId from '../utility/GenerateId';

export default function Input(){
    const input = useRef();
    const dispatch = useDispatch();


    function handleSubmit() {
        const id = generateId();
        const comment = input.current.value;
        dispatch(commentActions.addComment({
            commentId: id,
            comment,
            isVisible: false,
            chat: []
        }))
        input.current.value = "";
    }

    function isKeyEnter(event) {
        if (event.keyCode === 13) {
            handleSubmit();
        }
    }

    return (
        <div>
            <input type="text" placeholder="Add your comment" ref={input} onKeyDown={isKeyEnter}/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}