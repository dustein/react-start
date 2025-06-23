export function RepositoryItem(props) {
  return (
    <li>
      {/* <strong>{props.repository.name ?? 'Valor Default'}</strong> */}
      <strong>{props.repository.name}</strong>
      <p>{props.repository.description}</p>
      {/* <a href={props.repository.link}> */}
      <a href={props.repository.html_url}>
        Acessar Repositório
      </a>
    </li>
  );
}