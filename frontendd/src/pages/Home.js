//pagina in care cream utilizatorii de care avem nevoie
import React, { useState, useEffect } from 'react';
const Home = () => {
  //functie dinamica de creare a celor 3 tipuri de utilizatori: autor/critic/organizator
  const createEntity = async (inputId, entityType) => {
    let entityName = document.getElementById(inputId);
    console.log(entityName);
    if (entityName!=null && entityName.value == ''){
        window.alert("introduceti continutul autorului!!");
    }
    else {
    // e.preventDefault();
    try {
        const response = await fetch('http://localhost:3002/api/' + entityType , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(
            {
                Nume:entityName.value,
            }
        ),
        });

        if (response.ok) {
        console.log('creat cu success!');
        } else {
        console.error('Eroare la creare ');
        }
    } catch (error) {
        console.error('Eroare de rețea:', error);
    }
    }
}
  return (
    <div>
      <h1>Home</h1>
      <div>
        Create:
      </div>
      <div>
        <span >Nume Autor</span>
        <input type="text" id="numeAutor"/>
        <button onClick={() => createEntity("numeAutor", "autor")}>Creaza Autor</button>
      </div>
      <div>
        <span >Nume Organizator</span>
        <input type="text" id="numeOrganizator"/>
        <button onClick={() => createEntity("numeOrganizator", "organizator")}>Creaza Organizator</button>
      </div>
      <div>
        <span >Nume Critic</span>
        <input type="text" id="numeCritic"/>
        <button onClick={() => createEntity("numeCritic", "critic")}>Creaza Critic</button>
      </div>
    </div>
  );
};

export default Home;