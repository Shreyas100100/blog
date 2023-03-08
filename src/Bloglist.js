const BlogList = ({blogs,title}) => {
    // const blogs=props.blogs;
    // const title = props.title;
    
  return (
    <class className="div">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </class>
  );
};

export default BlogList;
