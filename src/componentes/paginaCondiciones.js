import React, { useState } from 'react';
function PaginaCondiciones({ formData, setFormData, handleNext, handlePrevious }) {
    const [condicion, setCondicion] = useState({ enfermedad: '', tiempo: '' });
  
    const handleCondicionChange = (e) => {
      const { name, value } = e.target;
      setCondicion((prevState) => ({
        ...prevState,
        [name]: value
      }));
    };
  
    const addCondicion = () => {
      setFormData((prevState) => ({
        ...prevState,
        condicionesPreExistentes: [...prevState.condicionesPreExistentes, condicion]
      }));
      setCondicion({ enfermedad: '', tiempo: '' });
    };
  
    return (
      <div>
        <h2>Condiciones Pre-Existentes</h2>
        <div className="form-group">
          <label>Enfermedad:</label>
          <input type="text" name="enfermedad" value={condicion.enfermedad} onChange={handleCondicionChange} />
        </div>
        <div className="form-group">
          <label>Tiempo con la Enfermedad (años):</label>
          <input type="number" name="tiempo" value={condicion.tiempo} onChange={handleCondicionChange} />
        </div>
        <button className="add-button" onClick={addCondicion}>Añadir Condición</button>
        <div className="button-group">
          <button onClick={handlePrevious}>Anterior</button>
          <button onClick={handleNext}>Siguiente</button>
        </div>
      </div>
    );
  }
export default PaginaCondiciones