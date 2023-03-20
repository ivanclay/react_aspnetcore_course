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

    setAtividades([...atividades, { ...novaAtividade}]);
  }

  return (
    <>
      <form className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Id</label>
            <input id='id' placeholder='id' type="text" className="form-control"/>
          </div>
          <div className="col-md-6">
            <label className="form-label">Descrição</label>
            <input id='descricao' placeholder='descricao' type="text" className="form-control"/>
          </div>
          <hr/>
          <div className="col-12">
            <button 
              className="btn btn-outline-secondary" 
              onClick={addAtividade}>
                + Atividade
            </button>
          </div>
      </form>
      <div className="mt-3">
          {atividades.map(ativ => (
            <div className="card mb-2 shadow-sm" key={ativ.id}>
             
              <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5 className='card-title'>
                  <span 
                    className="badge bg-secondary me-1">
                    {ativ.id}
                  </span>
                  - Título
                </h5>
                <h6>
                  Prioridade: 
                    <span className='text-black ms-1'>
                      <i className='me-1 far fa-meh'></i>
                      Normal
                    </span>
                </h6>
              </div>
                <p className="card-text">
                  {ativ.descricao}
                </p>
              </div>
          </div>
          ))}
      </div>

     

    </>
  );
}

export default App;
