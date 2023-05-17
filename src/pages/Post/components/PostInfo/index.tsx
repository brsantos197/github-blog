import { Container, Header, Info, InfoItem, Title, BackLink } from './styles';

import { BsBoxArrowUpRight, BsBuildingFill, BsChevronLeft } from 'react-icons/bs'
import { FaGithub, FaUserFriends } from 'react-icons/fa'
import { Link } from '../../../../components/Link';

export const PostInfo = () => {
  return (
    <Container>
      <Header>
        <BackLink to="/">
          <BsChevronLeft />
          Voltar
        </BackLink>
        <Link href='https://github.com'>
          Ver Github
          <BsBoxArrowUpRight size={12} />
        </Link>
      </Header>
      <Title>Bruno Santos</Title>
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
    </Container>
  )
}
