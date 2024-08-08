export default function Reply({chat}){
    return (
      <>
        <ul>
            {
                chat.map((reply) => {
                    return (
                        <li key={reply.replyId}>{reply.content}</li>
                    )    
                })
            }     
        </ul>
      </>
    );
}