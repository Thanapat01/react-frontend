import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Todo from "../components/Todo";

function View() {
  const [todo, setTodo] = useState();

  useEffect(() => {
    async function getTodo() {
      const res = await fetch("http://localhost:8080/todo", {
        method: "GET",
      });
      const data = await res.json();

      setTodo(data.todo);
    }

    getTodo();
  }, []);

  function handleDelete(e) {
    const id = e.target.id;

    const todoFilter = todo.filter((todo) => todo.ID != id);
    setTodo(todoFilter);

    fetch("http://localhost:8080/todo/" + id, {
      method: "DELETE",
    });
  }

  return (
    <Layout>
      <div className="m-4 grid grid-cols-5 gap-2">
        {todo?.map((todo) => {
          return (
            <Todo
              key={todo.ID}
              id={todo.ID}
              title={todo.title}
              description={todo.description}
              handleDelete={handleDelete}
            ></Todo>
          );
        })}
      </div>
    </Layout>
  );
}

export default View;
