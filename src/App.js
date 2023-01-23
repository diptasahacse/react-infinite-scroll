import logo from "./logo.svg";
import "./App.css";
import PostComponent from "./components/PostComponent";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";

const POST_ITEM = 5;

function App() {
  const [stateData, setStateData] = useState([]);
  const [postItem, setPostItem] = useState(POST_ITEM);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${postItem}`
    );
    const data = await res.json();
    setStateData([...data]);
    setLoading(false);
  };

  const scrollToEnd = () => {
    if (postItem < 100) {
      setPostItem((pre) => pre + 5);
    }
  };
  window.onscroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      scrollToEnd();
    }
  };

  useEffect(() => {
    getData();
  }, [postItem]);

  console.log(postItem);

  return (
    <div className="App">
      <PostComponent data={stateData} />

      {loading && <Loading />}
    </div>
  );
}

export default App;
