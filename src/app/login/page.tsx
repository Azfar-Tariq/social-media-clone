"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { axios } from "axios";

export default function LoginPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onLogin = async () => {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-center text-white text-2xl">Login</h1>
      <hr />
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
        onClick={onLogin}
      >
        Login
      </button>
      <Link href="/signup">Signup Here</Link>
    </div>
  );
}
