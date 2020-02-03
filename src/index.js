import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "./styles.css";

function Reddit() {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    axios.get("https://www.reddit.com/r/reactjs.json").then(res => {
      const newPosts = res.data.data.children.map(obj => obj.data);
      setPosts(newPosts);
    });
  }, []);

  return (
    <div>
      <h1>/r/reactjs</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <span>Title: </span>
            {post.title}
            <br />
            <span>Score: </span>
            {post.score}
            <span> | URL: </span>
            <a href={post.url}>Link</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

ReactDOM.render(<Reddit />, document.getElementById("root"));
