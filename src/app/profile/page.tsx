"use client";
import useUser from "@/hooks/useUser";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function ProfilePage() {
  const userId = useUser();
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
      <h2>
        {userId === "" ? (
          "User Not Found"
        ) : (
          <Link href={`/profile/${userId}`}>
            <div className="px-2 py-1 bg-amber-300 text-black rounded-lg hover:underline">
              ID: {userId}
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
