import React from "react";
import Story from "./Story";
import Post from "./Post";

const stories = [
  { image: "user1.png", username: "user1" },
  { image: "user2.png", username: "user2" },
];

const posts = [
  {
    image: "post1.jpeg",
    username: "user1",
    caption: "This is a random post!",
  },
  {
    image: "post2.jpeg",
    username: "user2",
    caption: "Another random post!",
  },
];

const Feed: React.FC = () => {
  return (
    <div>
      <div className="flex space-x-4 p-4 bg-white rounded-lg mb-4">
        {stories.map((story, index) => (
          <Story key={index} {...story} />
        ))}
      </div>
      <div>
        {posts.map((post, index) => (
          <Post key={index} {...post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
