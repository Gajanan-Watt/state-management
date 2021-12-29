export const TodoItem = ({ title, status, id, handleRemoveItem }) => {
  console.log("Id from ", title, "is", id);
  return (
    <>
      <div>
        {/* {title} - {status ? "Done" : "Not Done"} */}
        {title}
        <button onClick={() => handleRemoveItem(id)}>Mark as Done</button>
      </div>
    </>
  );
};
