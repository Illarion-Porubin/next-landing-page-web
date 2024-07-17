"use client"

import UserInfo from "@/components/dashboard/userInfo/UserInfo";
import useTokenValidation from "@/hooks/check";
import { useGetContentQuery } from "@/lib/redux";
import React from "react";

const UserPage = () => {
  useTokenValidation();

  const {data= [], isLoading} = useGetContentQuery(undefined)

  if(isLoading) return <h1>Loading...</h1>

  return (
    <UserInfo data={data}/>
  )
};

export default UserPage;