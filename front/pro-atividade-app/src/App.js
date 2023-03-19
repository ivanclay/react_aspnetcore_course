import { useState } from 'react';
import './App.css';

let initialState = [
  {
    id: 1,
    descricao: 'Primeira Atividade'
  },
  {
    id: 2,
    descricao: 'Segunda Atividade'
  }
]

function App() {

  const [atividades, setAtividades] = useState(initialState)

  function addAtividade(e){
    e.preventDefault();
    
    const novaAtividade = {
      id: document.getElementById('id').value,
      descricao: document.getElementById('descricao').value
    }

    atividades.push(novaAtividade);
    setAtividades([...atividades]);
    console.log(atividades);
  }

  return (
    <>
      <form>
        <input id='id' placeholder='id' />
        <input id='descricao' placeholder='descricao' />
        <button onClick={addAtividade}>+ Atividade</button>
      </form>
      <div className="mt-3">
        <ul className='list-group'>
          {atividades.map(ativ => (
            <li className='list-group-item' key={ativ.id}>{ativ.id}-{ativ.descricao}</li>
          ))}
          </ul>
      </div>
    </>
  );
}

export default App;
