import { useSelector } from "react-redux"

export default function Comment({index}){
    const userChats = useSelector(state => state.chat.chat)
    const chat = userChats[index];
    
    return (
        <div>
            {chat && chat.map((log, index) => {
                return <li key={index}>{log}</li>
            })}
        </div>
    )
}