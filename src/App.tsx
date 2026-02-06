import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="w-full h-full min-h-screen">
      <Navbar />
      <div className="p-4">
        <Outlet/>
      </div>
    </div>
  );
}

export default App;
