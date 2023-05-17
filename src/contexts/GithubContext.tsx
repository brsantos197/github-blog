import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";
import { UserType } from "../@types/user.type";
import { IssueType } from "../@types/post.type";

interface GithubContextType {
  user?: UserType
  getPosts: (filter: string) => Promise<void>
  posts?: PostDataType
}

interface GithubContextProviderProps {
  children: ReactNode
}

interface PostDataType {
  total_count: number
  incomplete_results: boolean
  items: IssueType[]
}
export const GithubContext = createContext({} as GithubContextType)

export const GithubProvider = ({ children }: GithubContextProviderProps) => {
  const [user, setUser] = useState<UserType>()
  const [posts, setPosts] = useState<PostDataType>()

  const getPosts = async (filter: string) => {
    if (user) {
      const { data } = await api.get(`/search/issues?q=${encodeURI(filter)}%20repo:${user.login}/github-blog`)
      setPosts(data)
    }
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await api.get('/users/brsantos197')
        setUser(data)
      } catch (error) {
        console.error(error);
      }
    }
    getData()
  }, [])

  return (
    <GithubContext.Provider
      value={{
        user,
        getPosts,
        posts
      }}
    >
      {children}
    </GithubContext.Provider>
  )
}