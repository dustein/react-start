import { RepositoryItem } from "./RepositoryItem";
import "../styles/repositories.scss";
import { useEffect, useState } from "react";

// const repository = {
//   name: "repositorio",
//   description: "descricao",
//   link: "https://www.link.aqui"
// };

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

export function RepositoryList() {

  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))
  }, [])

  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>
      <ul>
        {repositories.map(repository => {
          return <RepositoryItem key={repository.name} repository={repository} />
        })}
        {/* <RepositoryItem repository={repository} /> */}
      </ul>
    </section>
    
  )
}