"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function ProfilePage() {
  const router = useRouter();

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
