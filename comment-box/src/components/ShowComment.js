import Chat from './Chat';
import UserActions from './UserActions';
export default function ShowComment(){
    let comments = JSON.parse(localStorage.getItem("Comment"))
    comments = comments.toString()
    const comment = comments.split(',')
    
    return (
        <ul>
            {comment.map((comment, index) => {
                return (
                    <li key={index}>
                        {comment}
                        <Chat index={index}/>
                        <UserActions index={index} />
                    </li>
                )
            })}
        </ul>
    )
}