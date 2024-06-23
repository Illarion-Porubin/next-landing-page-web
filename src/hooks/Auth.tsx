"use client"

import React from "react";
import { IAdmin } from "../types";


export const useAuth = () => {
  const [admin, setAdmin] = React.useState<IAdmin | null>();

  // const fetchAuthAdmin = async () => {
  //   const data:IAdmin = await fetch("http://localhost:3001/admin").then((data) => data.json())
  //   console.log(data);
  //   setAdmin(data)
  // } 

  // React.useEffect(() => {
  //   fetchAuthAdmin()
  // }, [])

  // if(admin?.isActivated && admin.isAdmin || admin?.accessToken){
  //   return navigate("/");
  // }
};
