const Client = ({ client, onDelete }) => {
  return (
    <li className="list-group-item">
      {client.name}
      <button
        type="button"
        className="btn btn-danger float-right"
        onClick={() => onDelete(client.id)}
      >
        X
      </button>
    </li>
  );
};

export { Client };
