import { useState, useContext } from "react";
import { Profile } from "./components/Profile";
import { Publications } from "./components/Publications";
import { Input } from "./components/Input";
import { Card } from "./components/Card";
import { Cards } from "./components/Cards";

import { NavLink } from "react-router-dom";
import { GithubContext } from "../../contexts/GithubContext";

export const Blog = () => {
  const { posts, getPosts } = useContext(GithubContext)
  const [filter, setFilter] = useState('')


  return (
    <>
      <Profile />
      <Publications count={posts?.total_count} />
      <Input value={filter} onChange={(e) => { setFilter(e.target.value) }} placeholder="Buscar conteúdo" />
      <button onClick={() => { getPosts(filter) }}>Enviar</button>
      <Cards>
        {posts?.items.map((post, index) => (
          <NavLink to={`/post/${post.number}`} key={index}>
            <Card content={post.body} title={post.title} created_at={new Date(post.created_at)} />
          </NavLink>
        ))}
      </Cards>
    </>
  );
}
