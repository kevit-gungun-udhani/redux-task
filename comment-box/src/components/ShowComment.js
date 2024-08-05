import Comment from './Comment';
import UserActions from './UserActions';
export default function ShowComment(){
    const comments = localStorage.getItem("Comment")
    const comment = comments.split(',')
    
    return (
        <ul>
            {comment.map((comment, index) => {
                return (
                    <li key={index}>
                        {comment}
                        <Comment index={index}/>
                        <UserActions/>
                    </li>
                )
            })}
        </ul>
    )
}