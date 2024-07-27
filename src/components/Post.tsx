import Image from "next/image";
import React from "react";

interface PostProps {
  image: string;
  username: string;
  caption: string;
}

const Post: React.FC<PostProps> = ({ image, username, caption }) => {
  return (
    <div className="mb-4 bg-white rounded-lg shadow">
      <div className="flex items-center p-4">
        <Image
          src={image}
          alt={username}
          width={40}
          height={40}
          className="w-10 h-10 rounded-full object-cover mr-2"
        />
        <p className="font-bold">{username}</p>
      </div>
      <Image
        src={image}
        alt={caption}
        width={600}
        height={600}
        className="w-full object-cover"
      />
      <div className="p-4">
        <p>
          <span className="font-bold mr-2">{username}</span>
          {caption}
        </p>
      </div>
    </div>
  );
};

export default Post;
