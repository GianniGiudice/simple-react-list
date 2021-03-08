import React, { useState } from "react";

const ClientForm = ({ onClientAdd }) => {
  const [newClient, setNewClient] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onClientAdd({
      id: new Date().getTime(),
      name: newClient
    });
    setNewClient("");
  };

  const handleChange = (event) => {
    setNewClient(event.currentTarget.value);
  };

  return (
    <form className="form-inline" onSubmit={handleSubmit}>
      <div className="form-group mt-3">
        <input
          className="form-control"
          value={newClient}
          type="text"
          placeholder="Jean DUPONT"
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-success ml-3">
          Confirmer
        </button>
      </div>
    </form>
  );
};

export { ClientForm };
