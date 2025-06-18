import { RepositoryItem } from "./RepositoryItem";

const repository = {
  name: "repositorio",
  description: "descricao",
  link: "https://www.link.aqui"
};

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>
      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
      </ul>
    </section>
  )
}