import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex items-center h-16 p-4 gap-4 border-b-2 border-black bg-slate-200 ">
      <div className="bg-blue-500 text-white font-bold p-2 rounded-md">
        <Link to="/">Home</Link>
      </div>
      <div className="bg-blue-500 text-white font-bold p-2 rounded-md">
        <Link to="/add">Add Todo</Link> 
      </div>
      <div className="bg-blue-500 text-white font-bold p-2 rounded-md">
        <Link to="/view">View Todo</Link>
      </div>
    </div>
  );
}

export default Navbar;
