import { useRef } from "react";
import Layout from "../components/Layout";

function Add() {
  const titleRef = useRef();
  const descriptionRef = useRef();

  async function handleAdd() {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;

    const res = await fetch("http://localhost:8080/todo", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        description: description,
      }),
    });

    const data = await res.json();
    console.log(data);
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
          className="bg-blue-400 text-white px-2 rounded"
          onClick={handleAdd}
        >
          Add
        </button>
      </div>
    </Layout>
  );
}

export default Add;
