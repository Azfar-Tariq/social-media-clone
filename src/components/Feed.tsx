"use client";

import React, { useEffect, useState } from "react";
import Story from "./Story";
import Post from "./Post";

interface StoryData {
  _id: string;
  user: { _id: string; username: string };
  image: string;
}

interface PostData {
  _id: string;
  user: { _id: string; username: string };
  image: string;
  caption: string;
}

const Feed: React.FC = () => {
  const [stories, setStories] = useState<StoryData[]>([]);
  const [posts, setPosts] = useState<PostData[]>([]);

  useEffect(() => {
    const fetchStories = async () => {
      const res = await fetch("/api/stories");
      const data = await res.json();
      setStories(data.stories);
    };

    const fetchPosts = async () => {
      const res = await fetch("/api/posts");
      const data = await res.json();
      setPosts(data.posts);
    };

    fetchStories();
    fetchPosts();
  }, []);

  return (
    <div>
      <div className="flex space-x-4 p-4 bg-white rounded-lg mb-4">
        {stories.map((story) => (
          <Story
            key={story._id}
            image={story.image}
            username={story.user.username}
          />
        ))}
      </div>
      <div>
        {posts.map((post) => (
          <Post
            key={post._id}
            image={post.image}
            username={post.user.username}
            caption={post.caption}
          />
        ))}
      </div>
    </div>
  );
};

export default Feed;
