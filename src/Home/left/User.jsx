import React from "react";

function User() {
  return (
    <div className="flex space-x-4 px-6 py-7 hover:bg-slate-600 duration-300 cursor-pointer">
      <div className="avatar online">
        <div className="w-14 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="user avatar" />
        </div>
      </div>
      <div>
        <h1>Deba</h1>
        <span>Deba@gmail.com</span>
      </div>
    </div>
  );
}

export default User;