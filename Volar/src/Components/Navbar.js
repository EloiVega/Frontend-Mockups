import React, { useState } from "react";
import classes from "./Navbar.module.css";
import { FiSearch } from "react-icons/fi";
import { SettingsRemoteRounded } from "@mui/icons-material";



const Navbar = () => {
  const desktopView = (
    <ul
      className={`hidden lg:flex m-auto w-5/6 h-full  gap-x-5 items-center justify-between`}
    >
      <li
        className={`w-16 h-full text-2xl flex items-center justify-center italic font-bold`}
      >
        <a href="/">Volar</a>
      </li>
      <li className={`${classes.navSearchBar} w-full h-4/6 max-w-3xl grow-3`}>
        <form className={`w-full h-full relative`}>
          <input
            className={`w-full h-full text-0.5 pl-5 outline-none border border-solid border-gray-300 text-gray-500 hover:border-gray-500`}
            placeholder="search for work, creators, galleries etc."
          />
          <button
            className={`outline-none border-none bg-white cursor-pointer w-6 h-5/6 absolute top-1/2 right-1.5 -translate-y-1/2`}
            type="submit"
          >
            <FiSearch />
          </button>
        </form>
      </li>
      <ul
        className={`${classes.navItemList} px-1 grow-3 flex items-center justify-center gap-x-7`}
      >
        <li>
          <a href="#">Works</a>
        </li>
        <li>
          <a href="#">Creators</a>
        </li>
        <li>
          <a href="#">Guide</a>
        </li>
        <li>
          <a href="#">Shows</a>
        </li>
        <li>
          <a href="#">Interiors</a>
        </li>
        <li>
          <a href="#">Magazine</a>
        </li>
      </ul>
      <ul className={`w-2/12 flex justify-end gap-x-0.5`}>
        <li className={`w-24`}>
          <button
            className={`bg-white border border-gray-300 border-solid w-9/12 h-7 text-xs font-bold`}
          >
            Login
          </button>
        </li>
        <li className={`w-24`}>
          <button
            className={`bg-black text-white border border-gray-300 border-solid w-9/12 h-7 text-xs font-bold`}
            id={classes.signUp}
          >
            Sign Up
          </button>
        </li>
      </ul>
    </ul>
  );

    document.addEventListener("click", () => {
      if(menuOpened)
        setMenuOpened(false);
    })

    const [searchPressed, setSearchPressed] = useState(false);
    const [menuOpened, setMenuOpened] = useState(false);
    let timer;
    const expandSearch = (e) => {
      e.preventDefault();
      if(timer) clearTimeout(timer);
      console.log(timer);

      setSearchPressed(true);

      timer = setTimeout(() => {setSearchPressed(false)}, 5000)
    }
    let timer2;
    const menuHandler = (e) => {
      e.preventDefault();
      if(timer2) clearTimeout(timer2)
      timer2 = setTimeout(() => {setMenuOpened(!menuOpened)}, 1);

    }

  const mobileView = (
    <ul
      className={`lg:hidden m-auto w-5/6 h-full flex gap-x-5 items-center justify-between`}
    >
      <li className={`${classes.navSearchBar} w-5/12 h-4/6 max-w-3xl relative`}>
        <form className={`w-full h-full`}>
          <input
            onChange={expandSearch}
            className={`w-full h-full text-0.5 pl-7 outline-none border border-solid border-gray-300 text-gray-500 hover:border-gray-500 transition duration-300 origin-left ${searchPressed === true? '': 'scale-x-0'}`}
            placeholder="search for work, creators, galleries etc."
          />
          <button
            className={`outline-none border-none bg-white cursor-pointer w-6 h-5/6 absolute top-1/2 left-0.5 -translate-y-1/2`}
            type="submit"
            onClick = {expandSearch}
          >
            <FiSearch />
          </button>
        </form>
      </li>
      <li
        className={`w-6/12 h-full text-2xl flex items-center justify-start italic font-bold`}
      >
        <a href="/">Volar</a>
      </li>
      <span onClick={menuHandler} className = {`${classes.collapsableNavIcon} w-8 h-5 flex flex-col justify-around`}>
        <span className = {`w-full bg-black`}/>
        <span className = {`w-full bg-black ${menuOpened? 'w-1/2' : ''}`}/>
        <span className = {`w-full bg-black`}/>
      </span>

      <div className = {`fixed ${classes.collapsableNav} ${menuOpened? '': '-translate-x-full'} flex flex-col gap-y-7 bg-white transition duration-500 h-full w-1/2 z-10 -left-1 top-0  shadow-lg shadow-slate-500`}>
        <div
          className={`bg-slate-800 text-white w-full h-28 text-2xl flex justify-center items-center italic font-bold border-b border-gray-300 border-solid`}
        >
          <a href="/">Volar</a>
        </div>
        <ul
          className={`${classes.navItemList} px-1 flex flex-col grow items-center justify-start gap-y-7`}
        >
          <li>
            <a href="#">Works</a>
          </li>
          <li>
            <a href="#">Creators</a>
          </li>
          <li>
            <a href="#">Guide</a>
          </li>
          <li>
            <a href="#">Shows</a>
          </li>
          <li>
            <a href="#">Interiors</a>
          </li>
          <li>
            <a href="#">Magazine</a>
          </li>
        </ul>

        <ul className={`w-full h-12 bg-slate-700 border border-gray-300`}>
          <li className={`w-full h-full flex justify-center items-center`}>
            <button
              className={`w-full h-full text-white border-solid text-lg tracking-wider font-bold`}
              id={classes.signUp}
            >
              Sign Up
            </button>
          </li>
        </ul>
      </div>

    </ul>
  );

  return (
    <div className={`w-full h-14 shadow-sm shadow-gray-300`}>
      {desktopView}
      {mobileView}
    </div>
  );
};

export default Navbar;
