import React, { useState, useEffect } from 'react';

const Critic = () => {
  const [autori, setAutori] = useState(null);
  const [articole, setArticole] = useState(null);
  const [conferinte, setConferinte] = useState(null);
  const [currentCritic, setCurrentCritic] = useState(null);

    const log = () => {
        console.log(conferinte);
    }

    const handleAutorChange = (event) => {
        const selectedAutorId = event.target.value;
        setCurrentCritic(selectedAutorId);
      };

    const handleCriticActivity = async (e, idCritic, feedback) => {
        let articleContent = document.getElementById("articleContent");
        if (articleContent.value == ''){
            window.alert("introduceti continutul articolului!!");
        }
        else if (currentCritic == null){
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
                    Feedback:'',
                    IdCriticCareAproba:'',
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
          <select onChange={handleAutorChange} value={currentCritic || ''}>
            <option value="">Selecteaza un autor</option>
            {autori.map(autor => (
              <option key={autor.Id} value={autor.Id}>
                {autor.Nume}
              </option>
            ))}
          </select>
        );
      };

    const listaArticole = () => {
        if (!articole || articole.length === 0) {
          return null;
        }
        return (
          <div value=''>
            <p>Lista articole</p>
            {articole.map(articol => (
                <div>
                    <span id={articol.Id}>
                        {articol.Continut}
                    </span>
                    <button onClick={(e) => handleCriticActivity(e, currentCritic.Id, null)}>
                        Aproba
                    </button>
                    <input id="feedback" type="text"/>
                    <button onClick={(e) => handleCriticActivity(e, null, 'asdasda')}>
                        Lasa feedback
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
    fetch('http://localhost:3002/api/articole')
      .then(response => response.json())
      .then(data => setArticole(data))
      .catch(error => console.error('Error fetching authors data:', error));
    fetch('http://localhost:3002/api/conferinte')
      .then(response => response.json())
      .then(data => setConferinte(data))
      .catch(error => console.error('Error fetching authors data:', error));
  }, []);

  
  return (
    <div>
     {current()}
     {listaArticole()}
    </div>
  );
};

export default Critic;