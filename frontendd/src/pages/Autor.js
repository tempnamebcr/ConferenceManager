import React, { useState, useEffect } from 'react';

const Autor = () => {
  const [autori, setAutori] = useState(null);
  const [conferinte, setConferinte] = useState(null);
  const [currentAutor, setCurrentAutor] = useState(null);

    const log = () => {
        console.log(conferinte);
    }

    const handleAutorChange = (event) => {
        const selectedAutorId = event.target.value;
        setCurrentAutor(selectedAutorId);
      };

    //la inregistrarea la conferinta se inscrie automat
    //un autor este inregistrat la o conferinta daca are articole pentru acea conferinta
    const handleArticolSubmit = async (e, conferintaId) => {
        let articleContent = document.getElementById("articleContent");
        if (articleContent.value == ''){
            window.alert("introduceti continutul articolului!!");
        }
        else if (currentAutor == null){
            window.alert("selectati un autor");
        }
        else {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3002/api/articol', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    Continut:articleContent.value,
                    IdAutor:currentAutor,
                    IdCriticCareAproba:null,
                    IdConferinta:conferintaId,
                    IdCritic1:null,
                    IdCritic2:null,
                    Feedback:null
                }
            ),
            });

            if (response.ok) {
            console.log('Articol creat cu success!');
            } else {
            console.error('Eroare la crearea articolului.');
            }
        } catch (error) {
            console.error('Eroare de rețea:', error);
        }
        }
    }

    const current = () => {
        if (!autori || autori.length === 0) {
          return null;
        }
        return (
          <select onChange={handleAutorChange} value={currentAutor || ''}>
            <option value="">Selecteaza un autor</option>
            {autori.map(autor => (
              <option key={autor.Id} value={autor.Id}>
                {autor.Nume}
              </option>
            ))}
          </select>
        );
      };

    const listaConferinte = () => {
        if (!conferinte || conferinte.length === 0) {
          return null;
        }
        return (
          <div value=''>
            <p>Lista conferinte</p>
            {conferinte.map(conferinta => (
                <div>
                    <span id={conferinta.Id}>
                        {conferinta.Nume}
                    </span>
                    <button onClick={(e) => handleArticolSubmit(e, conferinta.Id)}>
                        Propune articol
                    </button>
              </div>
            ))}
          </div>
        );
      };

  useEffect(() => {
    fetch('http://localhost:3002/api/autori')
      .then(response => response.json())
      .then(data => setAutori(data))
      .catch(error => console.error('Error fetching authors data:', error));
    fetch('http://localhost:3002/api/conferinte')
      .then(response => response.json())
      .then(data => setConferinte(data))
      .catch(error => console.error('Error fetching authors data:', error));
  }, []);

  
  return (
    <div>
      <h1>Autori</h1>
      {current()}
      {log()}
      {listaConferinte()}
      <p>Continut articol:</p>
      <input id="articleContent" type="text"/>
    </div>
  );
};

export default Autor;