import { useState } from "react";

export const TodoInput = ({ getData }) => {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
    //text value getting re-rendered in setText and when
    //we click on button it is showing the output
  };

  const handleClick = () => {
    getData(text);
  };

  return (
    <>
      <input onChange={handleChange} type="text" placeholder="Enter Task" />
      <button onClick={handleClick}>Add Task</button>
    </>
  );
};
