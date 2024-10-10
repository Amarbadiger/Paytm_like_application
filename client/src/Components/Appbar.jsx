import React from "react";

const Appbar = ({ user, src }) => {
  return (
    <div className="bg-slate-50 border-b-2 h-16 w-full flex justify-between px-14 pt-5 text-lg">
      <h1>Payments App</h1>
      <ul>
        <li>
          hello, {user} <img src={src} alt="" />
        </li>
      </ul>
    </div>
  );
};

export default Appbar;