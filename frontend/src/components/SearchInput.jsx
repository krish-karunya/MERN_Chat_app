import React, { useState } from "react";
import { useConversation } from "../store/useConversation";
import { useGetUser } from "../hooks/useGetUser";
import toast from "react-hot-toast";

const SearchInput = () => {
  const [searchInput, setSearchInput] = useState("");
  const { setSelectedConversation } = useConversation();
  const { user } = useGetUser();

  const HandleSubmit = (e) => {
    e.preventDefault();
    if (searchInput == "") return;
    if (searchInput.length < 3) {
      return toast.error("Please Enter minimum 3 character");
    }
    const conversation = user.find((u) =>
      u.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    if (!conversation) {
      return toast.error("No User Found");
    }
    console.log(conversation);

    setSelectedConversation(conversation);
    setSearchInput("");
  };

  return (
    <form
      className='flex justify-center items-center gap-3 mb-4 mt-4 mx-2'
      onSubmit={HandleSubmit}>
      <input
        type='text'
        className='bg-gray-800 border-none outline-none px-6 py-4 w-40 sm:w-full rounded-full text-sm '
        placeholder='Search Name'
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button className='bg-gray-800 p-3 rounded-full' type='submit'>
        🔍
      </button>
    </form>
  );
};

export default SearchInput;
