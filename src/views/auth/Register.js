import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import logo from "../../assets/img/Logo Kemenko Bidang Kemaritiman Dan Investasi 1.png";
import { RegisterUser } from "../../api";
export default function Register() {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [nama, setNama] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [active, setActive] = useState(false);
  const [active1, setActive1] = useState(false);

  function Regist() {
    let data = {
      nama: nama,
      email: email,
      password: password,
      role: role,
    };

    RegisterUser(data).then((res) => {
      console.log(res);

      setTimeout(() => {
        history.push("/auth/login");
      }, 2000);
    });
  }
  function signIn() {
    history.push("/auth/login");
  }
  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-5/12 px-4">
            <div className="flex justify-center mb-5">
              <img className="" src={logo} alt="img"></img>
            </div>
            <div className="text-black text-center mb-5 text-sm font-bold">
              Kementrian Koordinator Kemaritiman{" "}
              <span className="block">dan Investas</span>
            </div>
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white border">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-black text-sm font-bold">
                    Create an Account
                  </h6>
                </div>
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form>
                  <div className="relative w-full mb-3">
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Name"
                      onChange={(e) => setNama(e.target.value)}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <input
                      type="email"
                      className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <input
                      type="password"
                      className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Set Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="flex justify-between">
                    <button
                      className={`border px-3 py-3 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring hover:text-slate-600 hover:border-yellow-500 ease-linear transition-all duration-150
                      ${active === true ? "bg-yellow-500" : ""}
                    `}
                      onClick={(e) => {
                        e.preventDefault();
                        setActive(!active);
                        setActive1(false);
                        setRole("sekretariatDeputi");
                      }}
                    >
                      Sekretariat Deputi
                    </button>
                    <button
                      className={`border px-3 py-3 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring hover:text-slate-600 hover:border-yellow-500 ease-linear transition-all duration-150
                      ${active1 === true ? "bg-yellow-500" : ""}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setActive1(!active1);
                        setActive(false);
                        setRole("biroPerencanaan");
                      }}
                    >
                      Biro Perencanaan
                    </button>
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-slate-800 text-white active:bg-slate-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button"
                      onClick={Regist}
                    >
                      Create Account
                    </button>
                  </div>
                  <div className="text-center mt-8">
                    <p className="font-normal text-base">
                      Have an Account ?{" "}
                      <span
                        className="text-yellow-500 cursor-pointer"
                        onClick={signIn}
                      >
                        Sign In
                      </span>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
