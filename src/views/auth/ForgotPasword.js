import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import logo from "../../assets/img/Logo Kemenko Bidang Kemaritiman Dan Investasi 1.png";
import { ResetPassword } from "../../api";
export default function ForgotPassword() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  function signUp() {
    history.push("/auth/register");
  }
  function ResetPaswordUser() {
    let data = {
      email: email,
      newPassword: newPassword,
      confirmPassword: confirmPassword,
    };

    ResetPassword(data).then((res) => {
      console.log(res);

      setTimeout(() => {
        history.push("/auth/login");
      }, 2000);
    });
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
                    Change Password
                  </h6>
                </div>
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form>
                  <div className="relative w-full mb-3">
                    <input
                      type="email"
                      className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="relative w-full mb-3">
                    <input
                      type="password"
                      className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <input
                      type="password"
                      className="border-0 px-3 py-3 placeholder-slate-300 text-slate-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Confirm Password"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                  <div className="flex justify-between">
                    <div className="">
                      <label className="inline-flex items-center cursor-pointer">
                        <input
                          id="customCheckLogin"
                          type="checkbox"
                          className="form-checkbox border-0 rounded text-slate-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                        />
                        <span className="ml-2 text-sm font-semibold text-slate-600">
                          Remember me
                        </span>
                      </label>
                    </div>
                    {/* <div className="">
                      <label className="inline-flex items-center cursor-pointer">
                        <span className="ml-2 text-sm font-semibold text-slate-600">
                          Forgot Password ?
                        </span>
                      </label>
                    </div> */}
                  </div>

                  <div className="text-center flex justify-center mt-6">
                    <button
                      className="bg-slate-300 text-black active:bg-slate-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1  ease-linear transition-all duration-150"
                      type="button"
                      onClick={ResetPaswordUser}
                    >
                      Change Password
                    </button>
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
