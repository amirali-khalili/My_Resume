import React from "react";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

function Header({ darkMode, setDarkMode }) {
  return (
    // <div className=" fixed top-0 left-0 right-0  py-6 bg-slate-100/50 backdrop-blur-2xl dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700 z-10">
    //   <div className="container flex justify-between items-center  text-2xl text-slate-900 dark:text-white">
    //     <div>Logo</div>
    //     <div>
    //       <button onClick={() => setDarkMode(!darkMode)} id="toggle__theme__btn"  className="cursor-pointer h-fit">
    //         <div className="inline-block dark:hidden ">
    //           <FaMoon />
    //         </div>
    //         <div className="hidden dark:inline-block">
    //           <FaSun />
    //         </div>
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <div className="fixed top-0 left-0 right-0 py-4 md:py-6 bg-slate-100/50 backdrop-blur-2xl dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700 z-99">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-2xl text-slate-900 dark:text-white">
        <div>Logo</div>
        <div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="cursor-pointer h-fit"
          >
            <div className="inline-block dark:hidden">
              <FaMoon />
            </div>
            <div className="hidden dark:inline-block">
              <FaSun />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
