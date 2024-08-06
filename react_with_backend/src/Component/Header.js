import React, { useContext, useState } from "react";
import { SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";
import { countryCode, language_code } from "../Constant/Functions";
import { UserContext } from "../Context/UserContext";
import { useDispatch, useSelector } from "react-redux";

function Header() {
  const navigation = useNavigate();

  const { isUser } = useContext(UserContext);
  const userDetail = useSelector((state) => state.newsReducer);

  const dispatch = useDispatch();

  const [language, setLanguage] = useState(language_code[0]);

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    dispatch({
      type: "CHANGE_LANGUAGE",
      payload: e.target.value,
    });
  };

  console.log(userDetail);

  return (
    <div className="flex items-center justify-between space-x-3 bg-gradient-to-r from-gray-500 to-red-500 px-4 py-4">
      <div className="flex items-center space-x-4">
        <h1 className="text-xl text-white font-semibold">Newzzz Updates! ;-)</h1>
        <div>
          {/* <h2 className="text-white">Deliver to Lakshay</h2> */}
          <p className="text-white"></p>
        </div>
      </div>
      {isUser && (
        <div className="p-1 border border-black flex items-center justify-between space-x-2 flex-1 rounded-md bg-white">
          <input
            className="flex-1 outline-none"
            type="text"
            placeholder="Search your favourite"
          />
          <SearchIcon className="h-6  text-black " />
        </div>
      )}
      <div className="flex items-center justify-evenly space-x-4">
        
        <p className="text-white">HOT TOPICS 🔥</p>
        <p
          onClick={() => navigation("/login")}
          className="text-white cursor-pointer"
        >
          {isUser
            ? `Welcome ${userDetail?.userDetail?.username}`
            : `Login/SignUp`}
        </p>
      </div>
    </div>
  );
}

export default Header;
