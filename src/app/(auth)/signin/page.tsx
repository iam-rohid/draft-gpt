"use client";
import { auth } from "@/libs/firebase";
import { useAuth } from "@/providers/AuthProvider";
import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import { useCallback } from "react";
import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";

const SignInPage = () => {
  const { user, isLoading } = useAuth();

  const signInWithGoogle = useCallback(async () => {
    try {
      const cred = await signInWithPopup(auth, new GoogleAuthProvider());
      console.log(cred);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const signInWithGithub = useCallback(async () => {
    try {
      const cred = await signInWithPopup(auth, new GithubAuthProvider());
      console.log(cred);
    } catch (e) {
      console.error(e);
    }
  }, []);

  const signInWithFacebook = useCallback(async () => {
    try {
      const cred = await signInWithPopup(auth, new FacebookAuthProvider());
      console.log(cred);
    } catch (e) {
      console.error(e);
    }
  }, []);

  if (isLoading) return <p>Loading...</p>;

  if (!!user) return <p>Use are already logged in</p>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Link href="/">
        <Image
          width={80}
          height={80}
          className="object-contain mb-8"
          src="/logo-512.png"
          alt="DraftGPT transparent 512x512 logo"
        />
      </Link>
      <div className="p-12 rounded-2xl border border-slate-100 w-full max-w-md bg-white shadow-2xl">
        <h1 className="mb-8 text-slate-600 text-center">Sign in with</h1>
        <div className="grid grid-cols-1 gap-4">
          <button
            onClick={signInWithGoogle}
            className="px-8 h-12 rounded-lg border flex items-center justify-center text-slate-600 hover:text-slate-900 border-slate-200 hover:bg-slate-100 w-full"
          >
            <FaGoogle className="text-2xl mr-4" />
            Google
          </button>
          <button
            onClick={signInWithGithub}
            className="px-8 h-12 rounded-lg border flex items-center justify-center text-slate-600 hover:text-slate-900 border-slate-200 hover:bg-slate-100 w-full"
          >
            <FaGithub className="text-2xl mr-4" />
            Github
          </button>
          <button
            onClick={signInWithFacebook}
            className="px-8 h-12 rounded-lg border flex items-center justify-center text-slate-600 hover:text-slate-900 border-slate-200 hover:bg-slate-100 w-full"
          >
            <FaFacebook className="text-2xl mr-4" />
            Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
