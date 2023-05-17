import { Profile } from "./components/Profile";
import { Publications } from "./components/Publications";
import { Input } from "./components/Input";
import { Card } from "./components/Card";
import { Cards } from "./components/Cards";

import { NavLink } from "react-router-dom";

export const Blog = () => {
  return (
    <>
      <Profile />
      <Publications count={6} />
      <Input placeholder="Buscar conteúdo" />

      <Cards>
        {[
          {
            title: 'JavaScript data types and data structures',
            content: 'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.',
            created_at: new Date()
          },
          {
            title: 'JavaScript data types and data structures',
            content: 'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.',
            created_at: new Date()
          },
          {
            title: 'JavaScript data types and data structures',
            content: 'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.',
            created_at: new Date()
          },
          {
            title: 'JavaScript data types and data structures',
            content: 'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.',
            created_at: new Date()
          },
          {
            title: 'JavaScript data types and data structures',
            content: 'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.',
            created_at: new Date()
          },
          {
            title: 'JavaScript data types and data structures',
            content: 'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.',
            created_at: new Date()
          },
        ].map((post, index) => (
          <NavLink to="/post" key={index}>
            <Card content={post.content} title={post.title} created_at={post.created_at} />
          </NavLink>
        ))}
      </Cards>
    </>
  );
}
