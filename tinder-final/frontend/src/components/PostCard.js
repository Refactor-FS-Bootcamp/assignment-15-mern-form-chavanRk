import React, { useState } from "react";
import "./PostCard.css";

const PostCard = () => {
  const [state, setstate] = useState({ name: "", url: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    const postURL = "http://localhost:8080/tinder/cards";
    fetch(postURL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: state.name,
        url: state.url,
      }),
    }).then(() => {
      alert("Data Uploaded to MongoDB");
    });

    console.log(state);
  };
  return (
    <div className="postcard">
      <form className="postcard_body" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={(e) => setstate({ ...state, name: e.target.value })}
            placeholder="Enter Name"
          />
        </label>
        <label>
          Image Url:
          <input
            type="text"
            name="url"
            value={state.url}
            onChange={(e) => setstate({ ...state, url: e.target.value })}
            placeholder="Enter Image Url"
          />
        </label>
        <input className="submit" type="submit" value="submit" />
      </form>
    </div>
  );
};

export default PostCard;
