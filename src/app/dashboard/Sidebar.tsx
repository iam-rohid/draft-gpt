"use client";
import Link from "next/link";
import Image from "next/image";
import {
  MdAdd,
  MdGridView,
  MdQuestionAnswer,
  MdViewList,
} from "react-icons/md";
import { useMemo } from "react";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-slate-50 h-screen fixed left-0 top-0 bottom-0 overflow-y-auto border-r border-slate-100">
      <header className="h-16 px-4 flex items-center">
        <Link href="/dashboard" className="inline-flex items-center mr-8">
          <Image
            width={36}
            height={36}
            src="/logo-512.png"
            alt="DraftGPT transparent 512x512 logo"
          />
          <span className="text-xl font-bold text-gray-900">DraftGPT</span>
        </Link>
      </header>
      <div className="p-4">
        <button className="flex items-center px-4 text-start h-10 rounded-lg bg-blue-500 text-white hover:bg-blue-600 w-full">
          <MdAdd className="text-xl mr-4" />
          New Project
        </button>
      </div>

      <nav className="space-y-px p-4">
        <Link
          className={`flex items-center px-4 h-10 rounded-lg font-medium ${
            pathname == "/dashboard"
              ? "bg-slate-200"
              : "hover:bg-slate-100 text-slate-600 hover:text-slate-900"
          }`}
          href="/dashboard"
        >
          <MdGridView className="text-xl mr-4" />
          Projects
        </Link>
        <Link
          className={`flex items-center px-4 h-10 rounded-lg font-medium ${
            pathname?.startsWith("/dashboard/templates")
              ? "bg-slate-200"
              : "hover:bg-slate-100 text-slate-600 hover:text-slate-900"
          }`}
          href="/dashboard/templates"
        >
          <MdViewList className="text-xl mr-4" />
          Templates
        </Link>
        <Link
          className={`flex items-center px-4 h-10 rounded-lg font-medium ${
            pathname?.startsWith("/dashboard/chat")
              ? "bg-slate-200"
              : "hover:bg-slate-100 text-slate-600 hover:text-slate-900"
          }`}
          href="/dashboard/chat"
        >
          <MdQuestionAnswer className="text-xl mr-4" />
          Chat
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
