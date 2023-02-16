"use client";
import AuthProvider from "@/providers/AuthProvider";
import { FC, PropsWithChildren } from "react";

const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default AuthLayout;
