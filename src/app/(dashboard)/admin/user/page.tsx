"use client"

import UserInfo from "@/components/dashboard/userInfo/UserInfo";
import useTokenValidation from "@/hooks/check";
import React from "react";

const UserPage = () => {
  useTokenValidation();

  return (
    <UserInfo/>
  )
};

export default UserPage;