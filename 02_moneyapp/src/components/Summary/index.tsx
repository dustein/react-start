import { Container } from "./styles";
import incomeImg from "../../assets/arrow-up.svg";
import outcomeImg from '../../assets/arrow-down.svg';
import totalImg from '../../assets/logo-money.svg';

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img className="diminui-tamanho-icones" src={incomeImg} alt="Entradas"/>
        </header>
        <strong>R$ 1.000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img className="diminui-tamanho-icones" src={outcomeImg} alt="Entradas"/>
        </header>
        <strong>R$ 1.000,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Saídas</p>
          <img className="diminui-tamanho-icones" src={totalImg} alt="Total"/>
        </header>
        <strong>R$ 0,00</strong>
      </div>

    </Container>
  )
}