"use client"

import React from "react";
import Link from "next/link";
import { registration } from "@/lib/data";

interface FormData {
  email: { value: string };
  password: { value: string };
  confermPass: { value: string };
  secretKey: { value: string };
}

const Regist = () => {
  const formInput = [
    { labe: "email", type: "text", placeholder: "email" },
    { labe: "password", type: "text", placeholder: "password" },
    { labe: "confermPass", type: "text", placeholder: "conferm" },
    { labe: "secretKey", type: "text", placeholder: "secretkey" },
  ];


  const formHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password, confermPass, secretKey } = e.target as typeof e.target & FormData;
    const data = { email: email.value, password: password.value, securePass: secretKey.value }
    if(confermPass.value === password.value){
      await registration(data);
      // if(refreshToken){
      //   document.cookie = `refreshToken=${refreshToken}; max-age=36`
      // }
    }
    else{
      window.alert("Пароли не совпадают") 
    }
  };

  return (
    <div className="flex w-full h-screen items-center justify-center bg-[#e7ecfa]">
      <div className="flex flex-col items-center justify-between w-[280px] h-auto rounded-xl p-6 bg-slate-600  text-black">
        <h3 className="my-4 text-white">Регистрация</h3>

        <form className="flex flex-col items-center justify-center w-full h-full" onSubmit={(e) => formHandler(e)}>
          {formInput.map((item: {labe: string, type: string, placeholder: string}) => (
            <label className="flex flex-col mb-4" key={item.labe}>
              <span className="text-sm text-slate-300 mb-1">{item.labe}</span>
              <input
                className="w-full text-black"
                id={item.labe}
                name={item.labe}
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
          href={"/login"}
        >
          Есть аккаунт?
        </Link>
      </div>
    </div>
  );
};

export default Regist