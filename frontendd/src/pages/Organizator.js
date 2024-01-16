import React, { useState, useEffect } from 'react';

const Organizator = () => {
  const [currentOrganizator, setCurrentOrganizator] = useState(null);
  const [critici, setCritici] = useState(null);
  const [articole, setArticole] = useState(null);
  const [criticiSelectati, setCriticiSelectati] = useState([]);
  const [organizatori, setOrganizatori] = useState(null);

  //seteaza organizatorul care adauga conferintele
  const handleOrganizatorChange = (event) => {
    const selectedOrganizatorId = event.target.value;
    setCurrentOrganizator(selectedOrganizatorId);
  };

  //adauga critic unic in lista cand selectezi
  const handleCriticiChange = (event) => {
    const selectedCriticId = event.target.value;  
    const selectedCritic = critici.find(critic => critic.Id == selectedCriticId);
    if(!criticiSelectati.includes(selectedCriticId)){
      setCriticiSelectati([...criticiSelectati, selectedCriticId])
      let li = document.createElement('li');
      li.textContent = selectedCritic.Nume;
      let ul = document.getElementById("criticiList");
      ul.appendChild(li);
    }
    else{
      window.alert("Deja este selectat criticul respectiv!")
    }
  };
  const log = () => {
    console.log(critici);
  }

  const current = () => {
    if (!organizatori || organizatori.length === 0) {
      return null;
    }
    return (
      <select onChange={handleOrganizatorChange} value={currentOrganizator || ''}>
        <option value="">Select an Organizer</option>
        {organizatori.map(organizator => (
          <option key={organizator.Id} value={organizator.Id}>
            {organizator.Nume}
          </option>
        ))}
      </select>
    );
  };

  const selectCritici = () => {
    if (!critici || critici.length === 0) {
      return null;
    }
    return(
      <form onSubmit={onConferintaSubmit}>
          <p>Adaugati numele conferintei</p>
          <input type="text" id="numeConferinta"/>
          <p>Selectati Criticii conferintei</p>
          <select onChange={handleCriticiChange} value=''>
          <option id="critici" value="">Selectati criticii pentru conferinta</option>
          {critici.map(critic => (
            <option key={critic.Id} value={critic.Id} >
              {critic.Nume}
            </option>
          ))}
        </select>
        <ul id="criticiList">
        </ul>
        <button type="submit">Creati conferinta</button>
      </form>
    )
  }

  const onConferintaSubmit = async(e) => {
    let name = document.getElementById("numeConferinta");
    if (name.value == ''){
      window.alert("introduceti numele!");
    }
    else if (criticiSelectati.length === 0){
      window.alert("selectati critici!")
    }
    else if (currentOrganizator == null){
      window.alert("selectati un organizator")
    }
    else {
      e.preventDefault();
      try {
        const response = await fetch('http://localhost:3002/api/conferinta', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(
            {
              Nume: name.value,
              IdOrganizator : currentOrganizator,
              critici : criticiSelectati
            }
          ),
        });

        if (response.ok) {
          console.log('Conferința creată cu succes!');
        } else {
          console.error('Eroare la crearea conferinței.');
        }
      } catch (error) {
        console.error('Eroare de rețea:', error);
      }
    }

  }

  const creareConferinta = () => {
    return(
        <div>
          {selectCritici()}
        </div>
    )
  }


  //listeaza articolele, cele care au fost aprobate au status aprobat, cele care au primit feedback
  //si asteapta retrimitere sunt In feedback, iar restul sunt waiting
  const listaArticole = () => {
    if (!articole) {
      return '';
    }
    return (
      <div>
        {articole.map(articol => (
          <div key={articol.Id}>
            <span>{articol.Continut} - </span>
            <span>
            <span>
            Status: {articol.Feedback !== null ? 'In Feedback' : ''}
            {articol.IdCriticCareAproba !== null ? 'Aprobat' : ''}
            {(articol.Feedback === null && articol.IdCriticCareAproba === null) ? 'Waiting' : ''}
          </span>
          </span>
          </div>
        ))}
      </div>
    );
  };

  useEffect(() => {

    fetch('http://localhost:3002/api/critici')
      .then(response => response.json())
      .then(data => setCritici(data))
      .catch(error => console.error('Error fetching articles data:', error));
    fetch('http://localhost:3002/api/articole')
      .then(response => response.json())
      .then(data => setArticole(data))
      .catch(error => console.error('Error fetching articles data:', error));

    fetch('http://localhost:3002/api/organizatori')
      .then(response => response.json())
      .then(data => setOrganizatori(data))
      .catch(error => console.error('Error fetching organizers data:', error));
  }, []);

  return (
    <div>
      <h1>Organizator</h1>
      {current()}
      {creareConferinta()}
      {listaArticole()}
    </div>
  );
};

export default Organizator;