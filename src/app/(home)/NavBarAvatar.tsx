"use client";
import AuthProvider, { useAuth } from "@/providers/AuthProvider";
import Link from "next/link";

const NavBarAvatar = () => {
  return (
    <AuthProvider>
      <View />
    </AuthProvider>
  );
};

export default NavBarAvatar;

const View = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) return <div>Loading...</div>;
  return !!user ? (
    <button>Hello</button>
  ) : (
    <Link
      href="/signin"
      className="bg-blue-500 text-white px-6 h-10 flex items-center rounded-lg hover:bg-blue-600 font-medium"
    >
      Sign In
    </Link>
  );
};
