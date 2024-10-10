import React, { useState } from 'react';
function PaginaInternamientos({ formData, setFormData, handleNext, handlePrevious }) {
    const [internamiento, setInternamiento] = useState({ fecha: '', centroMedico: '', diagnostico: '' });
  
    const handleInternamientoChange = (e) => {
      const { name, value } = e.target;
      setInternamiento((prevState) => ({
        ...prevState,
        [name]: value
      }));
    };
  
    const addInternamiento = () => {
      setFormData((prevState) => ({
        ...prevState,
        internamientos: [...prevState.internamientos, internamiento]
      }));
      setInternamiento({ fecha: '', centroMedico: '', diagnostico: '' });
    };
  
    return (
      <div>
        <h2>Internamientos</h2>
        <div className="form-group">
          <label>Fecha:</label>
          <input type="date" name="fecha" value={internamiento.fecha} onChange={handleInternamientoChange} />
        </div>
        <div className="form-group">
          <label>Centro Médico:</label>
          <input type="text" name="centroMedico" value={internamiento.centroMedico} onChange={handleInternamientoChange} />
        </div>
        <div className="form-group">
          <label>Diagnóstico:</label>
          <input type="text" name="diagnostico" value={internamiento.diagnostico} onChange={handleInternamientoChange} />
        </div>
        <button className="add-button" onClick={addInternamiento}>Añadir Internamiento</button>
        <div className="button-group">
          <button onClick={handlePrevious}>Anterior</button>
          <button onClick={handleNext}>Siguiente</button>
        </div>
      </div>
    );
  }
export default PaginaInternamientos  