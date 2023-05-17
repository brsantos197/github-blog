import { useContext } from "react";
import { Avatar, Bio, Container, Header, GithubContainer, Name, Info, InfoItem } from './styles';

import { BsBoxArrowUpRight, BsBuildingFill } from 'react-icons/bs'
import { FaGithub, FaUserFriends } from 'react-icons/fa'
import { Link } from '../../../../components/Link';
import { GithubContext } from "../../../../contexts/GithubContext";

export const Profile = () => {
  const { user } = useContext(GithubContext)

  return (
    <Container>
      <Avatar src={user?.avatar_url} />
      <GithubContainer>
        <Header>
          <Name>{user?.name}</Name>
          <Link href={user?.html_url}>
            Github
            <BsBoxArrowUpRight size={12} />
          </Link>
        </Header>
        <Bio>
          {user?.bio}
        </Bio>
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
      </GithubContainer>
    </Container>
  )
}
