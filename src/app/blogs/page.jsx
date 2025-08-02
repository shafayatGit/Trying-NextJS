import { Button } from "@/Components/ui/button";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "All Blogs || Learning NextJS",
  description: "Learning next app",
};


const getPosts = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users").then(
    (res) => res.json()
  );
  return data;
};

const blog = async () => {
  const posts = await getPosts();
  return (
    <div>
      <h1>Blog Page</h1>
      <h1>Total: {posts.length}</h1>
      <div className="grid grid-cols-3 gap-5 ">
        {posts.map((post) => (
          <div key={post.id} className="border border-gray-500 rounded-2xl p-4">
            <h1>Name: {post.name}</h1>
            <h1>UserName: {post.username}</h1>
            <h1>Email: {post.email}</h1>
            <h1>Phone: {post.phone}</h1>
            <Link href={`/blogs/${post.id}`}>
              <Button>Details</Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default blog;
