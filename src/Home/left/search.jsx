import React from "react";
import { IoSearch } from "react-icons/io5";

function Search() {
  return (
    <div className="px-6 py-4">
  <form action="">
    <label className="input input-bordered flex items-center gap-1 w-[80%]">

      <input
        type="text"
        className="grow outline-none bg-slate-900"
        placeholder="Search"
      />

      <button type="submit">
        <IoSearch className="text-2xl " />
      </button>

    </label>
  </form>
</div>
  );
}

export default Search;