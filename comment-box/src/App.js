import { useSelector } from "react-redux";
import Input from "./components/Input";
import ShowComment from "./components/ShowComment";
function App() {
  const comment = useSelector(state => state.comment.comment)
  console.log(comment)
  return (
    <div>
      <p>Comments</p>
      <Input />
      {comment.length > 0 && <ShowComment comment={comment} />}
    </div>
  );
}

export default App;
