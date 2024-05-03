"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState("");

  async function getData() {
    const response = await axios.get("/api/users/me");
    console.log(response.data);
    setUser(response.data.data._id);
  }

  useEffect(() => {
    getData();
  }, []);

  const logout = async () => {
    try {
      const response = await axios.get("/api/users/logout");
      console.log(response.data);
      toast.success("Logout successful!");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-center text-white text-2xl">Profile</h1>
      <hr />
      <p>Profile page</p>
      <h2>
        {user === "" ? (
          "User Not Found"
        ) : (
          <Link href={`/profile/${user}`}>
            <div className="px-2 py-1 bg-amber-300 text-black rounded-lg hover:underline">
              ID: {user}
            </div>
          </Link>
        )}
      </h2>
      <hr />
      <button
        className="p-2 m-2 rounded-lg bg-emerald-500 hover:bg-emerald-600"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
}
