import logoImg from "../../assets/logo-money.svg"
import { Container, Content } from "./styles"

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Money Logo" />
        <button type="button">
          Nova Operação
        </button>
      </Content>
    </Container>
  )
}
