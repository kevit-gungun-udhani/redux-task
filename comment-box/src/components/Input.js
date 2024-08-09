import {useDispatch} from 'react-redux'
import { useRef } from 'react';
import { commentActions } from '../store/comment-slice';
import generateId from '../utility/GenerateId';
import classes from './Input.module.css';

export default function Input(){
    const input = useRef();
    const dispatch = useDispatch();


    function handleSubmit() {
        const id = generateId();
        const comment = input.current.value;
        if (comment) {
            dispatch(
              commentActions.addComment({
                commentId: id,
                comment,
                isVisible: false,
                chat: [],
              })
            );
        }
        input.current.value = "";
    }

    function isKeyEnter(event) {
        if (event.keyCode === 13) {
            handleSubmit();
        }
    }

    return (
        <div className={classes.commentBox}>
            <input type="text" placeholder="Add your comment" ref={input} onKeyDown={isKeyEnter} className={classes.input} />
            <button onClick={handleSubmit} className={classes.button}>Submit</button>
        </div>
    )
}