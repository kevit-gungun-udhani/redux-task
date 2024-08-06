import { useSelector } from "react-redux"

export default function Chat({index}){
    const userChat = useSelector((state) => state.chat.chat)

    return (
        <div>
            {userChat[index] && userChat[index].map((log, index) => {
               return <p key={index}>{log}</p>
           })}
        </div>
    )
}