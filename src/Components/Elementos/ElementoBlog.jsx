import React from "react";
import '../../style/ListaBlogs.css';

const ElementoBlog = (props) => {
  const blog = props.elemento;
  return (
    <div className="blog-card">
      <p className="headings">{blog.titulo}</p>
      <div className="blog-imagen-container">
      <img src={blog.imagen} alt="blog" className="blog-imagen"/>
      </div>
      <br />
      <p className="parrafo"><strong>{blog.author}</strong></p>
      <p className="parrafo"><span id="fecha-blog">{blog.fecha}</span></p>
      <p className="parrafo" id="parrafo-blog">{blog.descripcion}</p>
      <br />
      <button className="btn-form">
          <p className="btn-parrafo">LEER MAS..</p>
        </button>
        <br />
        <br />
    </div>
  );
};

export default ElementoBlog;
