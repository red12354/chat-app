import React from "react";

export default function Logout({ onLogout }) {
  return (
    <div className="w-[5%] bg-slate-900 text-white min-h-screen flex flex-col justify-end items-center pb-5">
      <div
        onClick={onLogout}
        className="cursor-pointer hover:bg-slate-700 p-2 rounded text-xs text-center"
      >
        Logout
      </div>
    </div>
  );
}
