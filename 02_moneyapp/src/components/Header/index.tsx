import logoImg from "../../assets/logo-money.svg";
import { Container, Content } from "./styles";

interface HeaderProps {
  onHandleOpenModal: () => void;
}

export function Header({onHandleOpenModal}: HeaderProps) {

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Money Logo" />
        <button type="button" onClick={onHandleOpenModal}>
          Nova Operação
        </button>


      </Content>
    </Container>
  )
}
