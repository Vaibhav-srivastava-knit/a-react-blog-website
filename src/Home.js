import { useEffect, useState } from "react";
import BlogList from "./blogList";
import useFetch from "./useFetch";

const Home = () => {
  const {data:blogs,ispending}=useFetch('http://localhost:8000/blogs');

  return (
    <div className="home">
      {ispending && <div>Loading.....</div>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
}
 
export default Home;