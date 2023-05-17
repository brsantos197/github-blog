import { Avatar, Bio, Container, Header, GithubContainer, Name, Info, InfoItem } from './styles';

import { BsBoxArrowUpRight, BsBuildingFill } from 'react-icons/bs'
import { FaGithub, FaUserFriends } from 'react-icons/fa'
import { Link } from '../../../../components/Link';

export const Profile = () => {
  return (
    <Container>
      <Avatar src='https://avatars.githubusercontent.com/u/54981257?v=4' />
      <GithubContainer>
        <Header>
          <Name>Bruno Santos</Name>
          <Link href='https://github.com'>
            Github
            <BsBoxArrowUpRight size={12} />
          </Link>
        </Header>
        <Bio>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
        </Bio>
        <Info>
          <InfoItem>
            <FaGithub />
            brsantos197
          </InfoItem>
          <InfoItem>
            <BsBuildingFill />
            Rocketseat
          </InfoItem>
          <InfoItem>
            <FaUserFriends />
            15 Seguidores
          </InfoItem>
        </Info>
      </GithubContainer>
    </Container>
  )
}
