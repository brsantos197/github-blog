import { Container } from './styles';
import coverImg from '../../assets/images/cover.svg'

export const Cover = () => {
  return (
    <Container>
      <img src={coverImg} alt="Imagem do cabeçalho" />
    </Container>
  )
}
