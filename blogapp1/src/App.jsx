import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import AddBlogPage from "./pages/AddBlogPage";
import PageNotFound from "./pages/PageNotFound";
import DetailPage from "./pages/DetailPage";
import EditBlogPage from "./pages/EditBlogPage";
import axios from "axios";
import { toast } from "react-toastify";

const App = () => {
  const createBlog = (data) => {
    axios
      .post("http://localhost:8003/blogs/", data)
      .then((res) => {
        console.log(res.data);
        toast.success("Blog created successfully!");
      })
      .catch((err) => console.log(err.message));
  };

  const updateBlog = (slug, data) => {
    axios
      .put(`http://localhost:8003/blogs/${slug}/`, data)
      .then((res) => {
        console.log(res.data);
        toast.success("Blog updated successfully!");
      })
      .catch((err) => console.log(err));
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/add-blog"
          element={<AddBlogPage createBlog={createBlog} />}
        />
        <Route path="/blogs/:slug" element={<DetailPage />} />
        <Route
          path="blogs/edit/:slug"
          element={<EditBlogPage updateBlog={updateBlog} />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
