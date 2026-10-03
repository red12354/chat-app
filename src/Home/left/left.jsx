import React from "react";
import Search from "./search";
import Users from "./Users";

function Left() {
  return (
    <div className="w-[30%] bg-black text-gray-300 min-h-screen">
      <h1 className="font-bold text-2xl p-2 px-11">
        Chats
      </h1>
      <Search />
      <hr className="my-2 border-gray-700" />
      <Users />
    </div>
  );
}

export default Left;