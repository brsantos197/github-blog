import { useContext } from "react";
import { Container, Header, Info, InfoItem, Title, BackLink } from './styles';

import { BsBoxArrowUpRight, BsBuildingFill, BsChevronLeft } from 'react-icons/bs'
import { FaGithub, FaUserFriends } from 'react-icons/fa'
import { Link } from '../../../../components/Link';
import { PostType } from '../../../../@types/post.type';
import { GithubContext } from '../../../../contexts/GithubContext';

interface PostInfoProps {
  post: PostType
}

export const PostInfo = ({ post }: PostInfoProps) => {
  const { user } = useContext(GithubContext)
  return (
    <Container>
      <Header>
        <BackLink to="/">
          <BsChevronLeft />
          Voltar
        </BackLink>
        <Link href={post.html_url}>
          Ver Github
          <BsBoxArrowUpRight size={12} />
        </Link>
      </Header>
      <Title>{post.title}</Title>
      <Info>
        <InfoItem>
          <FaGithub />
          {user?.login}
        </InfoItem>
        <InfoItem>
          <BsBuildingFill />
          {user?.company}
        </InfoItem>
        <InfoItem>
          <FaUserFriends />
          {user?.followers} Seguidores
        </InfoItem>
      </Info>
    </Container>
  )
}
