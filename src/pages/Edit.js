import { useRef, useEffect } from "react";
import Layout from "../components/Layout";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
  const titleRef = useRef();
  const descriptionRef = useRef();

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    async function getTodo() {
      const res = await fetch("http://localhost:8080/todo/" + id, {
        method: "GET",
      });
      const data = await res.json();
      const todo = data.todo;

      titleRef.current.value = todo.title;
      descriptionRef.current.value = todo.description;
    }

    getTodo();
  }, [id]);

  async function handleEdit() {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;

    const res = await fetch("http://localhost:8080/todo/" + id, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        description: description,
      }),
    });

    const data = await res.json();

    if (res.status === 200) {
      navigate("/view");
    }
  }

  return (
    <Layout>
      <div className="flex flex-col justify-center items-center h-full gap-1">
        <div>Title</div>
        <input type="text" className="border" ref={titleRef}></input>
        <div>Description</div>
        <input type="text" className="border" ref={descriptionRef}></input>
        <button
          type="button"
          className="bg-blue-500 text-white px-2 rounded"
          onClick={handleEdit}
        >
          Edit
        </button>
      </div>
    </Layout>
  );
}

export default Edit;
