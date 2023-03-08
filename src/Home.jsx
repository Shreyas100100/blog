import React from "react";
import { useState } from "react";
import BlogList from "./Bloglist";
function Home() {
  const [blogs, setBlogs] = useState([
    { title: "Blog 1", body: "Lorem Ipsum", author: "Auth 1", id: 1 },
    { title: "Become a DevOps Engineer", body: "Lorem Ipsum", author: "Auth 2", id: 2 },
    { title: "Blog 3", body: "Lorem Ipsum", author: "Auth 3", id: 3 },
  ]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title ="All Blogs"/>
      <BlogList blogs={blogs.filter((blogs)=>blogs.author==='Auth 2')} title ="Auth 2 Blogs"/>
    </div>
  );
}

export default Home;
