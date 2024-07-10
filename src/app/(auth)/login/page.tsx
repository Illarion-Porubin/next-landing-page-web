"use client";

import React from "react";
import Link from "next/link";
import { useCustomDispatch, useCustomSelector } from "@/hooks/store";
import { fetchLogin } from "@/lib/redux/slices/authSlice";
import { selectAuthData } from "@/lib/redux/selectors";
import { useRouter } from "next/navigation";

interface FormData {
  email: { value: string };
  password: { value: string };
}

const Login = () => {
  const dispatch = useCustomDispatch();

  const formInput = [
    { label: "email", type: "text", placeholder: "email" },
    { label: "password", type: "text", placeholder: "password" },
  ];

  const formHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = e.target as typeof e.target & FormData;
    dispatch(fetchLogin({action: "login", email: email.value, password: password.value }));
  };


  return (
    <div className="flex w-full h-screen items-center justify-center bg-[#e7ecfa]">
      <div className="flex flex-col items-center justify-between w-[280px] h-auto rounded-xl p-6 bg-slate-600  text-black">
        <h3 className="my-4 text-white">Авторизация</h3>

        <form
          className="flex flex-col items-center justify-center w-full h-full"
          onSubmit={(e) => formHandler(e)}
        >
          {formInput.map(
            (item: { label: string; type: string; placeholder: string }) => (
              <label
                className="flex flex-col mb-4"
                key={item.label}
                htmlFor={item.label}
              >
                <span className="text-sm text-slate-300 mb-1">
                  {item.label}
                </span>
                <input
                  className="w-full text-black"
                  type={item.type}
                  name={item.label}
                  id={item.label}
                  placeholder={item.placeholder}
                />
              </label>
            )
          )}
          <button
            className="p-2 bg-white w-[100px] h-8 rounded-sm text-sm leading-[1px]"
            type="submit"
          >
            войти
          </button>
        </form>
        <Link className="text-sm mt-6 text-white" href={"/regist"}>
          Нет аккаунта?
        </Link>
      </div>
    </div>
  );
};

export default Login;
