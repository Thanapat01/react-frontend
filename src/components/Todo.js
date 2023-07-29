import { useNavigate } from "react-router-dom";

function Todo({ id, title, description, handleDelete }) {
  const navigate = useNavigate();

  function handleEdit() {
    navigate("/edit/" + id);
  }

  return (
    <div className="flex flex-col p-4 border bg-slate-200 rounded-lg ">
      <div>Title: {title}</div>
      <div>Description : {description}</div>
      <div className="flex gap-2 justify-end items-end h-full">
        <button
          className="bg-blue-400 text-white px-2 rounded"
          onClick={handleEdit}
        >
          Edit
        </button>
        <button
          id={id}
          className="bg-red-400 text-white px-2 rounded"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Todo;
