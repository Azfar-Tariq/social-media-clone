"use client";

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { axios } from "axios";

export default function SignupPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });

  const onSignup = async () => {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-center text-white text-2xl">Sign Up</h1>
      <hr />
      <label htmlFor="username">username</label>
      <input
        className="p-2 border mb-4 border-gray-300 rounded-lg focus:outline-none"
        id="username"
        type="text"
        placeholder="username"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
      <label htmlFor="email">email</label>
      <input
        className="p-2 border mb-4 border-gray-300 rounded-lg focus:outline-none"
        id="email"
        type="text"
        placeholder="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <label htmlFor="password">password</label>
      <input
        className="p-2 border mb-4 border-gray-300 rounded-lg focus:outline-none"
        id="password"
        type="password"
        placeholder="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <button
        className="p-2 mb-4 border bg-blue-500 text-white rounded-lg"
        onClick={onSignup}
      >
        Signup
      </button>
      <Link href="/login">Login Here</Link>
    </div>
  );
}
