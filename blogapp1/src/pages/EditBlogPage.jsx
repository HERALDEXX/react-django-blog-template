import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditBlogPage = ({ updateBlog }) => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const [blog, setBlog] = useState({});
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8003/blogs/${slug}`)
      .then((res) => {
        setBlog(res.data);
        setTitle(res.data.title);
        setContent(res.data.content);
        console.log(res.data);
        // console.log(res.data.title)
        // console.log(res.data.content)
      })
      .catch((err) => console.log(err.message));
  }, []);

  const updatedBlog = {
    title: title,
    content: content,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(updatedBlog);
    updateBlog(slug, updatedBlog);
    navigate("/");
  };
  return (
    <div className="flex justify-center items-center h-screen mt-10 border-purple-900">
      <form
        className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
        <p className="text-2xl mb-4 text-center font-semibold">Edit Blog</p>
        <div className="mb-8">
          <label
            htmlFor="input"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Title
          </label>
          <input
            id="input"
            value={title}
            className="border-2 border-purple-900 rounded w-full py-2 px-3 text-gray-950 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your input"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-8">
          <label
            htmlFor="textarea"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Body
          </label>
          <textarea
            id="textarea"
            value={content}
            className="border-2 border-purple-900 rounded w-full py-2 px-3 text-gray-950 leading-tight focus:outline-none focus:shadow-outline"
            rows="6"
            placeholder="Enter your message"
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Edit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditBlogPage;
