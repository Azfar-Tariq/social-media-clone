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
        src={image}
        alt={username}
        width={64}
        height={64}
        className="w-16 h-16 rounded-full object-cover"
      />
      <p className="text-xs text-center mt-1">{username}</p>
    </div>
  );
};

export default Story;
