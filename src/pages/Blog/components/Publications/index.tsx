import { Container, PublicarionsCounter, Title } from './styles';

interface PublicationsProps {
  count: number
}
export const Publications = ({ count }: PublicationsProps) => {
  return (
    <Container>
      <Title>Publicações</Title>
      <PublicarionsCounter>{count} publicações</PublicarionsCounter>
    </Container>
  );
}
