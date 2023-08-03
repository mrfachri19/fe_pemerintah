import React from "react";
import { useHistory } from "react-router-dom";
import minilogo from "../../assets/img/Logo Kemenko Bidang Kemaritiman Dan Investasi 1 (1).png";

export default function Navbar() {
  const history = useHistory();
  function LogOut() {
    localStorage.clear();
    history.push("/auth/login");
  }
  return (
    <>
      {/* Navbar */}
      <nav className=" bg-white w-full z-10 md:flex-row md:flex-nowrap md:justify-start flex items-center p-4 shadow">
        <div className="w-full mx-10 items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          {/* Brand */}
          <img src={minilogo} alt="img" className="mr-5" />
          <a
            className={`text-black cursor-pointer hover:text-yellow-500 text-base uppercase hidden mr-14 lg:inline-block font-bold`}
            onClick={() => history.push("/admin")}
          >
            KEMENKOMARVES
          </a>
          {localStorage.getItem("role") == "biroPerencanaan" ? (
            <></>
          ) : (
            <>
              {" "}
              <a
                className={`text-black cursor-pointer hover:text-yellow-500 text-base uppercase hidden mr-14 lg:inline-block font-bold  ${
                  window.location.href.indexOf("/admin/home") !== -1
                    ? "text-yellow-500"
                    : "text-black"
                }`}
                onClick={() => history.push("/admin/home")}
              >
                BUAT LEMBAR
              </a>
              <a
                className={`text-black cursor-pointer hover:text-yellow-500 text-base uppercase hidden mr-14 lg:inline-block font-bold  ${
                  window.location.href.indexOf("/admin/submitted") !== -1
                    ? "text-yellow-500"
                    : "text-black"
                }`}
                onClick={() => history.push("/admin/submitted")}
              >
                SUBMITTED
              </a>
            </>
          )}

          {/*  */}
          <div className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
            <a
              className="text-slate-400 cursor-pointer hover:text-yellow-500 text-sm uppercase hidden lg:inline-block font-semibold"
              onClick={(e) => e.preventDefault()}
            >
             {localStorage.getItem("nama")}
            </a>
            <span className="text-black hover:text-yellow-500 font-medium text-sm uppercase hidden mx-5 lg:inline-block">
              |
            </span>
            <a
              className="text-black cursor-pointer hover:text-yellow-500 text-sm uppercase hidden lg:inline-block font-medium"
              onClick={LogOut}
            >
              Logout
            </a>
          </div>
          {/* User */}
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}
