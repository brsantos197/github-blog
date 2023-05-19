import { useContext } from "react";
import { Profile } from "./components/Profile";
import { Publications } from "./components/Publications";
import { Card } from "./components/Card";
import { Cards } from "./components/Cards";

import { NavLink } from "react-router-dom";
import { GithubContext } from "../../contexts/GithubContext";
import { useForm } from "react-hook-form";
import { Container, InputContainer } from "./styles";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const searchFormSchema = z.object({
  query: z.string()
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export const Blog = () => {
  const { posts, getPosts } = useContext(GithubContext)

  const { handleSubmit, register, formState: { isSubmitting } } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  })


  const handleGetPosts = async (data: SearchFormInputs) => {
    await getPosts(data.query)
  }
  return (
    <Container>
      <Profile />
      <Publications count={posts?.total_count} />
      <form onSubmit={handleSubmit(handleGetPosts)}>
        <InputContainer>
          <input minLength={3} placeholder="Buscar conteúdo" {...register('query')} />
        </InputContainer>
        <button disabled={isSubmitting} type='submit'></button>
      </form>
      <Cards>
        {posts?.items.map((post, index) => (
          <NavLink to={`/post/${post.number}`} key={index}>
            <Card content={post.body} title={post.title} created_at={new Date(post.created_at)} />
          </NavLink>
        ))}
      </Cards>
    </Container>
  );
}
