import { TodoInput } from "./GroceryList";
import { useState } from "react";
import { TodoItem } from "./GroceryItem";
import { nanoid } from "nanoid";

export const Todo = () => {
  const [list, setList] = useState([]);
  const handleClick = (data) => {
    console.log("Data in parent: ", data);
    const payload = {
      title: data,
      status: false,
      id: nanoid(7)
    };
    // console.log(list);

    setList([...list, payload]);
  };
  // const handleDelete = (id) => {
  //   // Delete algorithm
  //   const newList = list.filter((list) => list.id !== id);

  //   setList(newList);
  // };
  const handleRemoveItem = (id) => {
    var new_arr = list.filter((item) => {
      return item.id !== id;
    });
    setList(new_arr);
  };
  return (
    <>
      <TodoInput getData={handleClick} />
      {list.map((e) => (
        <TodoItem
          key={e.id}
          {...e}
          // title={e.title}
          handleRemoveItem={handleRemoveItem}
        />
      ))}
    </>
  );
};
