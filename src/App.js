import "./App.css";
import { useDispatch } from "react-redux";
import { getPosts, getPostDetails } from "./store/posts/actions";
import { useEffect } from "react";

function App() {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
    dispatch(getPostDetails(1));
  }, []);

  return (
    <div>
      <p>Redux-Saga</p>
    </div>
  );
}

export default App;
