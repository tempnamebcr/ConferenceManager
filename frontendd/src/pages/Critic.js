import React, { useState, useEffect } from 'react';

const Critic = () => {
  const [critici, setCritici] = useState(null);
  const [articole, setArticole] = useState(null);
  const [conferinte, setConferinte] = useState(null);
  const [currentCritic, setCurrentCritic] = useState(null);

    //autorul curent
    const handleCriticChange = (event) => {
        const selectedCriticId = event.target.value;
        setCurrentCritic(selectedCriticId);
      };


    // functie dinamica care aproba/lasa feedback in functie de cum este apelata
    const handleCriticActivity = async (e, idCritic, feedback, idRecenzie) => {
        if(currentCritic == null){
          window.alert("selectati criticul")
        }
        else {
          let feedbackInput = document.getElementById(feedback);
          let feedbackText = null;
          
          // daca se apasa butonul "aproba", nu trimite textul din feedback
  
          if (idCritic == null){
            feedbackText = feedbackInput.value;
          }
          e.preventDefault();
          try {
              console.log('a');
              const response = await fetch('http://localhost:3002/api/articol/'+idRecenzie, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(
                  {
                      Feedback:feedbackText,
                      IdCriticCareAproba:idCritic,
                  }
              ),
              });
  
              if (response.ok) {
              console.log('schimbare facuta cu success!');
              } else {
              console.error('Eroare.');
              }
          } catch (error) {
              console.error('Eroare de rețea:', error);
          }
        }
        
    }

    const current = () => {
        if (!critici || critici.length === 0) {
          return null;
        }
        return (
          <select onChange={handleCriticChange} value={currentCritic || ''}>
            <option value="">Selecteaza un critic</option>
            {critici.map(critic => (
              <option key={critic.Id} value={critic.Id}>
                {critic.Nume}
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
                    <span id={`span${articol.Id}`}>
                        {articol.Continut}
                    </span>
                    <button onClick={(e) => handleCriticActivity(e, currentCritic, null, articol.Id)}>
                        Aproba
                    </button>
                    <input id={`${articol.Id}`} type="text"/>
                    <button onClick={(e) => handleCriticActivity(e, null, `${articol.Id}` , articol.Id)}>
                        Lasa feedback
                    </button>
              </div>
            ))}
          </div>
        );
      };

  useEffect(() => {
    fetch('http://localhost:3002/api/critici')
      .then(response => response.json())
      .then(data => setCritici(data))
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