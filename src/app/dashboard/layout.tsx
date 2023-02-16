"use client";
import AuthProvider from "@/providers/AuthProvider";
import { FC, PropsWithChildren } from "react";
import Sidebar from "./Sidebar";

const DashboardLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <AuthProvider>
      <Sidebar />
      <main className="ml-64">{children}</main>
    </AuthProvider>
  );
};

export default DashboardLayout;
