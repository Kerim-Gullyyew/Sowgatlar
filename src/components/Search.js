import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const lang = localStorage.getItem("userLanguage");
const Search = () => {
  let [searchParams] = useSearchParams();
  let title_ru = searchParams.get("title_ru");
  let title_tm = searchParams.get("title");
  if (title_ru === null || lang === "tm") {
    title_ru = "";
  }
  if (title_tm === null || lang === "ru") {
    title_tm = "";
  }
  const navigate = useNavigate();
  const [title, setTitle] = useState(title_tm);
  const onTitleChanged = (e) => setTitle(e.target.value);
  const [title_rus, setTitle_Ru] = useState(title_ru);
  const onTitle_RUChanged = (e) => setTitle_Ru(e.target.value);
  const onSearchClicked = (e) => {
    if (lang === "tm") {
      navigate("/shop/?title=" + title);
    } else {
      navigate("/shop/?title_ru=" + title_rus);
    }
  };

  return (
    <>
      <div className=" w-full max-w-md mx-6 relative flex">
        <span className="absolute left-4 top-3 text-lg text-gray-400">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <i className="fa-solid fa-magnifying-glass"></i>
        </span>
        {lang === "tm" ? (
          <input
            value={title}
            onChange={onTitleChanged}
            type="search"
            name="search"
            id="search"
            className="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none"
            placeholder={lang === "tm" ? "Gözle" : "Найти"}
          />
        ) : (
          <input
            value={title_rus}
            onChange={onTitle_RUChanged}
            type="search"
            name="search"
            id="search"
            className="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none"
            placeholder={lang === "tm" ? "Gözle" : "Найти"}
          />
        )}

        <button
          onClick={onSearchClicked}
          className="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition"
        >
          {lang === "tm" ? "Gözle" : "Найти"}
        </button>
      </div>
    </>
  );
};

export default Search;
