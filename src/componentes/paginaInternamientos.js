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

  const removeInternamiento = (index) => {
    const updatedInternamientos = formData.internamientos.filter((_, i) => i !== index);
    setFormData({ ...formData, internamientos: updatedInternamientos });
  };

  const removeAllInternamientos = () => {
    setFormData({ ...formData, internamientos: [] });
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
      
      {/* Visualización de Internamientos */}
      <div className="internamientos-list">
        <h3>Internamientos Añadidos</h3>
        <ul>
          {formData.internamientos.map((internamiento, index) => (
            <li key={index}>
              <strong>Fecha:</strong> {internamiento.fecha}, 
              <strong> Centro Médico:</strong> {internamiento.centroMedico}, 
              <strong> Diagnóstico:</strong> {internamiento.diagnostico}
              <button onClick={() => removeInternamiento(index)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Botón para eliminar todos los internamientos */}
      {formData.internamientos.length > 0 && (
        <button onClick={removeAllInternamientos}>Eliminar todos los internamientos</button>
      )}

      <div className="button-group">
        <button onClick={handlePrevious}>Anterior</button>
        <button onClick={handleNext}>Siguiente</button>
      </div>
    </div>
  );
}

export default PaginaInternamientos;
