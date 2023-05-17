import { formatDistanceToNow } from 'date-fns';
import { CardContent, CardHeader, Container } from './styles';
import { ptBR } from 'date-fns/locale';

interface CardProps {
  title: string
  content: string
  created_at: Date
}

export const Card = ({ title, content, created_at }: CardProps) => {
  const dateRelativeToNow = formatDistanceToNow(created_at, {
    locale: ptBR,
    addSuffix: true
  })
  return (
    <Container>
      <CardHeader>
        <h3>{title}</h3>
        <span>{dateRelativeToNow}</span>
      </CardHeader>
      <CardContent>{content}</CardContent>
    </Container>
  );
}