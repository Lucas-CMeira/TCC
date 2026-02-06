import React from "react";

import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="w-full bg-emerald-500 h-16 p-4 shadow-md flex items-center gap-4">
      <div onClick={() => navigate("/")}>Home</div>
      <div onClick={() => navigate("/profile")}>Profile</div>
    </nav>
  );
};

export default Navbar;
