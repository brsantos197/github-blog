import { Container } from './styles';

interface ContentProps {
  children: React.ReactNode
}

export const Content = ({ children }: ContentProps) => {
  return (
    <Container>
      {children}
    </Container>
  );
}
