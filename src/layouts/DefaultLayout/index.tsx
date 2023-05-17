import { Cover } from "../../components/Cover";
import { Content } from "../../components/Content";
import { Container } from "./styles";

import { Outlet } from "react-router-dom";

export const DefaultLayout = () => {
  return (
    <Container>
      <Cover />
      <Content>
        <Outlet />
      </Content>
    </Container>
  )
}