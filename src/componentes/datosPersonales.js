import React, { useState } from 'react';
import PaginaFamiliares from './paginasFamiliares'
import PaginaCondiciones from './paginaCondiciones'
import PaginaInternamientos from './paginaInternamientos'
import PresentacionDatos  from './presentacionDatos'
import '../App.css'; 
function FormularioMultipagina() {
    const [formData, setFormData] = useState({
      persona: {
        nombre: '',
        apellido: '',
        fechaNacimiento: ''
      },
      familiares: [],
      condicionesPreExistentes: [],
      internamientos: []
    });
  
    const [page, setPage] = useState(1);
  
    const handleNext = () => setPage(page + 1);
    const handlePrevious = () => setPage(page - 1);
  
    // Manejar el cambio en los campos del formulario
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevState) => ({
        ...prevState,
        persona: {
          ...prevState.persona,
          [name]: value
        }
      }));
    };
  
    return (
      <div className="form-container">
        <div className="form-header">Formulario Multipágina</div>
        {page === 1 && (
          <div>
            <h2>Datos Personales</h2>
            <div className="form-group">
              <label>Nombre:</label>
              <input
                type="text"
                name="nombre"
                value={formData.persona.nombre}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Apellido:</label>
              <input
                type="text"
                name="apellido"
                value={formData.persona.apellido}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Fecha de Nacimiento:</label>
              <input
                type="date"
                name="fechaNacimiento"
                value={formData.persona.fechaNacimiento}
                onChange={handleInputChange}
              />
            </div>
            <div className="button-group">
              <button onClick={handleNext}>Siguiente</button>
            </div>
          </div>
        )}
        {page === 2 && <PaginaFamiliares formData={formData} setFormData={setFormData} handleNext={handleNext} handlePrevious={handlePrevious} />}
        {page === 3 && <PaginaCondiciones formData={formData} setFormData={setFormData} handleNext={handleNext} handlePrevious={handlePrevious} />}
        {page === 4 && <PaginaInternamientos formData={formData} setFormData={setFormData} handleNext={handleNext} handlePrevious={handlePrevious} />}
        {page === 5 && <PresentacionDatos formData={formData} handlePrevious={handlePrevious} />}
      </div>
    );
  }
export default FormularioMultipagina;
