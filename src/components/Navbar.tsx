import React from "react";

import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="w-full bg-emerald-600 h-16 p-4 shadow-md flex justify-center gap-7">
      <div onClick={() => navigate("/")}>Home</div>
      <div onClick={() => navigate("/profile")}>Profile</div>
    </nav>
  );
};

export default Navbar;
