import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import { useEffect, useContext, useState } from 'react'
import { useParams } from "react-router-dom";
import { PostInfo } from "./components/PostInfo";
import { api } from '../../lib/axios';
import { GithubContext } from '../../contexts/GithubContext';
import { PostType } from '../../@types/post.type';
import { PostContent } from './styles';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useTheme } from 'styled-components';

export const Post = () => {
  const { postId } = useParams()
  const { user, repo } = useContext(GithubContext)
  const [post, setPost] = useState<PostType>()

  const { COLORS } = useTheme()

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
          <PostContent
            children={post.body}
            components={{
              code({ children, className, ...props }) {
                const match = /language-(\w+)/.exec(className || "");

                if (!match) {
                  return <code className={className} {...props} />
                }

                return (
                  <SyntaxHighlighter language={match[1]} style={{
                    ...dracula,
                    'code[class*="language-"]': {
                      ...dracula['code[class*="language-"]'],
                      backgroundColor: COLORS['base-post'],
                      color: COLORS['base-text'],
                    },
                    'pre[class*="language-"]': {
                      ...dracula['pre[class*="language-"]'],
                      backgroundColor: COLORS['base-post'],
                      color: COLORS['base-text'],
                    },
                  }}>
                    {children.toString()}
                  </SyntaxHighlighter>
                )
              }
            }} />
        </>
      ) : null}
    </main>
  );
}
