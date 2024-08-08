export default function Reply({chat}){
    console.log(chat)
    return (
      <>
        <ul>
            {
                chat.map((reply) => {
                    return (
                        <li key={reply.replyId}>{reply.data}</li>
                    )    
                })
            }     
        </ul>
      </>
    );
}