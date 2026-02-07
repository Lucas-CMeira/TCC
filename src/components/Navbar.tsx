import React from "react";
import GranaFy from "../assets/GranaFy.png"
  import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="w-full justify-between bg-emerald-500 h-16 p-4 shadow-md flex items-center gap-5">
      <img src={GranaFy} alt="Logo da GranaFy" className="w-10 h-10"></img>  
      <div className="w-full flex gap-4 justify-center items-center">
        <div className="cursor-pointer" onClick={() => navigate("/")}>
          Home
        </div>
        <div className="cursor-pointer" onClick={() => navigate("/profile")}>
          Profile
        </div>
        <div className="cursor-pointer" onClick={() => navigate("/login")}>
          Sair
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
