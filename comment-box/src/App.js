import { useSelector } from "react-redux";
import Input from "./components/Input";
function App() {
  const comment = useSelector(state => state.comment.comment)
  console.log(comment)
  return (
    <div>
      <p>Comments</p>
      <Input />
      {comment.length > 0 && <p>{comment[0].comment}</p>}
    </div>
  );
}

export default App;
