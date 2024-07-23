"use client";

import Feed from "@/components/Feed";
import useUser from "@/hooks/useUser";
import Link from "next/link";

const HomePage: React.FC = () => {
  const userId = useUser();

  return (
    <div className="flex justify-around">
      <div>
        <p>Sidebar</p>
        <Link href={`/profile/${userId}`}>Profile</Link>
      </div>
      <Feed />
      <div>
        <p>Trending</p>
        <p>Suggestions</p>
      </div>
    </div>
  );
};

export default HomePage;
