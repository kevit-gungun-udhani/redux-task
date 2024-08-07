import {useDispatch, useSelector} from 'react-redux'
import { useRef } from 'react';
import { commentActions } from '../store/comment-slice';

export default function Input(){
    const input = useRef();
    const dispatch = useDispatch();

    function generateId() {
        return Math.random().toString(16).slice(2);
    }

    function handleSubmit() {
        const id = generateId();
        const comment = input.current.value;
        dispatch(commentActions.addComment({
            commentId: id,
            comment,
            chat: []
        }))
        input.current.value = "";
    }

    return (
        <div>
            <input type="text" placeholder="Add your comment" ref={input}/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}