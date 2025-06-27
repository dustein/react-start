import styled from "styled-components";

export const Container = styled.div`
  /* Estilos gerais da tabela */
  padding: 0 3rem;
table {
  width: 100%; /* A tabela ocupa 100% da largura disponível */
  border-collapse: collapse; /* Remove o espaço entre as células */
  margin: 20px 0; /* Margem superior e inferior para espaçamento */
  font-family: Arial, sans-serif; /* Fonte simples e comum */
}

/* Estilos do cabeçalho da tabela */
thead {
  background-color: #f2f2f2; /* Fundo cinza claro para o cabeçalho */
}

th {
  padding: 10px; /* Espaçamento interno */
  text-align: left; /* Alinha o texto à esquerda */
  border-bottom: 1px solid #ddd; /* Borda inferior para separar do corpo */
}

/* Estilos das linhas do corpo da tabela */
tbody tr {
  border-bottom: 1px solid #eee; /* Borda inferior sutil para cada linha */
}

tbody tr:nth-child(even) {
  background-color: #f9f9f9; /* Fundo levemente diferente para linhas pares (efeito zebrado) */
}

/* Estilos das células de dados */
td {
  padding: 10px; /* Espaçamento interno */
  vertical-align: top; /* Alinha o conteúdo ao topo da célula */
}

/* Estilos específicos para depósitos (entradas) */
td.deposit {
  color: #28a744; /* Cor verde para depósitos */
  font-weight: bold; /* Negrito */
}

/* Estilos específicos para saques (retiradas) */
td.withdraw {
  color: #dc3545; /* Cor vermelha para saques */
  font-weight: bold; /* Negrito */
}
`;