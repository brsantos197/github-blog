import { Routes, Route } from "react-router-dom"
import { Blog } from "./pages/Blog"
import { Post } from "./pages/Post"
import { DefaultLayout } from "./layouts/DefaultLayout"

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Blog />}></Route>
        <Route path="/post/:postId" element={<Post />}></Route>
      </Route>
    </Routes>
  )
}