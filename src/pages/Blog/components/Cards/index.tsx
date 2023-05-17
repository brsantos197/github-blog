import { ReactNode } from "react";
import { Container } from "./styles";

interface CardsProps {
  children: ReactNode
}

export const Cards = ({ children }: CardsProps) => {
  return (
    <Container>
      {children}
    </Container>
  );
}