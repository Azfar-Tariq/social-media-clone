import Image from "next/image";
import React from "react";

interface StoryProps {
  image: string;
  username: string;
}

const Story: React.FC<StoryProps> = ({ image, username }) => {
  return (
    <div>
      <Image
        src={`/images/${image}`}
        alt={username}
        width={40}
        height={40}
        className="w-16 h-16 rounded-full"
      />
      <p className="text-xs">{username}</p>
    </div>
  );
};

export default Story;
