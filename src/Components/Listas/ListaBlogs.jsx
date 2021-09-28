import React from "react";
import ElementoBlog from "../Elementos/ElementoBlog";

const ListaBlogs = (props) => {
  const blogs = props.blogs;
  return (
    <div>
      {blogs.map((elemento) => {
        return <ElementoBlog key={elemento._id} elemento={elemento} />;
      })}
    </div>
  );
};

export default ListaBlogs;
