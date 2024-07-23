import Image from "next/image";
import React from "react";

interface PostProps {
  image: string;
  username: string;
  caption: string;
}

const Post: React.FC<PostProps> = ({ image, username, caption }) => {
  return (
    <div className="post mb-4">
      <div className="header flex items-center mb-2">
        <Image
          src={`/images/${image}`}
          alt={username}
          width={40}
          height={40}
          className="w-10 h-10 rounded-full mr-2"
        />
        <p className="font-bold">{username}</p>
      </div>
      <Image
        src={`/images/${image}`}
        alt={caption}
        width={40}
        height={40}
        className="w-full rounded-lg"
      />
      <p className="mt-2">{caption}</p>
    </div>
  );
};

export default Post;
