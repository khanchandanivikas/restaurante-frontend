import React from "react";
import BienvenidoBlog from "../Components/Intros/BienvenidoBlog";
import ListaBlogs from "../Components/Listas/ListaBlogs";

const Blog = (props) => {
  const blogs = props.blogs;
  return (
    <div>
      <BienvenidoBlog />
      <ListaBlogs key={blogs._id} blogs={blogs} />
    </div>
  );
};

export default Blog;
