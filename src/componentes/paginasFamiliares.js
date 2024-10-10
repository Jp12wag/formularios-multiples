import React, { useState } from 'react';

function PaginaFamiliares({ formData, setFormData, handleNext, handlePrevious }) {
    const [familiar, setFamiliar] = useState({ nombre: '', parentesco: '', edad: '' });
  
    const handleFamiliarChange = (e) => {
      const { name, value } = e.target;
      setFamiliar((prevState) => ({
        ...prevState,
        [name]: value
      }));
    };
  
    const addFamiliar = () => {
      setFormData((prevState) => ({
        ...prevState,
        familiares: [...prevState.familiares, familiar]
      }));
      setFamiliar({ nombre: '', parentesco: '', edad: '' });
    };
  
    return (
      <div>
        <h2>Familiares</h2>
        <div className="form-group">
          <label>Nombre:</label>
          <input type="text" name="nombre" value={familiar.nombre} onChange={handleFamiliarChange} />
        </div>
        <div className="form-group">
          <label>Parentesco:</label>
          <input type="text" name="parentesco" value={familiar.parentesco} onChange={handleFamiliarChange} />
        </div>
        <div className="form-group">
          <label>Edad:</label>
          <input type="number" name="edad" value={familiar.edad} onChange={handleFamiliarChange} />
        </div>
        <button className="add-button" onClick={addFamiliar}>Añadir Familiar</button>
        <div className="button-group">
          <button onClick={handlePrevious}>Anterior</button>
          <button onClick={handleNext}>Siguiente</button>
        </div>
      </div>
    );
  }
  export default PaginaFamiliares;
  