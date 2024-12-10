import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function SearchBox() {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value === "") {
      alert("Keyword can't be empty!");
      return;
    }

    setValue("");
  };

  return (
    <>
      <form className="w-[100%]" onSubmit={handleSubmit}>
        <input
          type="text"
          className="w-[85%] outline-none bg-none border border-[#8758ff] px-2 py-3 mt-4 mb-3 text-black"
          name="search"
          id="search"
          value={value}
          placeholder="Search..."
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          type="submit"
          className="w-[15%] bg-[#8758ff] text-white border-none px-2 py-3 cursor-pointer hover:bg-[#6c4ccd] transition duration-300"
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    </>
  );
}
