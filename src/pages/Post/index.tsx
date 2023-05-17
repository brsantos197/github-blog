import { useEffect, useContext, useState } from 'react'
import { useParams } from "react-router-dom";
import { PostInfo } from "./components/PostInfo";
import { api } from '../../lib/axios';
import { GithubContext } from '../../contexts/GithubContext';
import { PostType } from '../../@types/post.type';
import { PostContent } from './styles';

export const Post = () => {
  const { postId } = useParams()
  const { user, repo } = useContext(GithubContext)
  const [post, setPost] = useState<PostType>()

  useEffect(() => {
    const getPost = async () => {
      if (user) {
        const { data } = await api.get(`/repos/${user.login}/${repo}/issues/${postId}`)
        setPost(data)
      }
    }
    getPost()
  }, [postId, user, repo])

  return (
    <main>
      {post ? (
        <>
          <PostInfo post={post} />
          <PostContent>
            {post.body}
          </PostContent>
        </>
      ) : null}
    </main>
  );
}
