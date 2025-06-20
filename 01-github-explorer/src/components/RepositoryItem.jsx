export function RepositoryItem(props) {
  return (
    <li>
      <strong>{props.repository.name ?? 'Valor Default'}</strong>
      <p>{props.repository.description}</p>
      <a href={props.repository.link}>
        Acessar Repositório
      </a>
    </li>
  );
}