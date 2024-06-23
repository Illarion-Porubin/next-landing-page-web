"use client"

import React from "react";
import { IForm } from "../../../types";
import Link from "next/link";


const Login = () => {
  const formInput = [
    { labe: "Email", type: "text", placeholder: "email" },
    { labe: "Password", type: "text", placeholder: "password" },
  ];

  return (
    <div className="flex w-full h-screen items-center justify-center bg-[#e7ecfa]">
      <div className="flex flex-col items-center justify-between w-[280px] h-auto rounded-xl p-6 bg-slate-600  text-black">
        <h3 className="my-4 text-white">Авторизация</h3>

        <form className="flex flex-col items-center justify-center w-full h-full">
        {formInput.map((item: IForm) => (
            <label className="flex flex-col mb-4" key={item.labe}>
              <span className="text-sm text-slate-300 mb-1">{item.labe}</span>
              <input
                className="w-full text-black"
                type={item.type}
                placeholder={item.placeholder}
              />
            </label>
          ))}
          <button
            className="p-2 bg-white w-[100px] h-8 rounded-sm text-sm leading-[1px]"
            type="submit"
          >
            войти
          </button>
        </form>
        <Link
          className="text-sm mt-6 text-white"
          href={"/regist"}
        >
          Нет аккаунта?
        </Link>
      </div>
    </div>
  );
};

export default Login