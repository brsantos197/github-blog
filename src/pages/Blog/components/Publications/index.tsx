import { Container, PublicarionsCounter, Title } from './styles';

interface PublicationsProps {
  count?: number
}
export const Publications = ({ count }: PublicationsProps) => {
  return (
    <Container>
      <Title>Publicações</Title>
      <PublicarionsCounter>{count ?? 0} publicações</PublicarionsCounter>
    </Container>
  );
}
