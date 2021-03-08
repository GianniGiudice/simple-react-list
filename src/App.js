import "./styles.css";
import React, { useState } from "react";
import { Client } from "./Client";
import { ClientForm } from "./ClientForm";

const App = () => {
  const [clients, setClients] = useState([
    { id: 1, name: "Sébastien GUIDEZ" },
    { id: 2, name: "Gautier COUTURE" },
    { id: 3, name: "Gianni GIUDICE" }
  ]);

  const addClient = (client) => {
    const clientsCpy = [...clients];
    clientsCpy.push(client);
    setClients(clientsCpy);
  };

  const deleteClient = (id) => {
    const clientsCpy = [...clients];

    clientsCpy.splice(
      clientsCpy.findIndex((client) => client.id === id),
      1
    );
    setClients(clientsCpy);
  };

  const title = "Liste des clients";
  const subtitle = "Ajout d'un client";

  return (
    <div className="container-fluid p-3">
      <h1>{title}</h1>

      <ul className="list-group">
        {clients.map((client) => (
          <Client key={client.id} client={client} onDelete={deleteClient} />
        ))}
      </ul>

      <h2 className="mt-5">{subtitle}</h2>

      <ClientForm onClientAdd={addClient} />
    </div>
  );
};

export { App };
