import React, { useState } from 'react';

function PaginaFamiliares({ formData, setFormData, handleNext, handlePrevious }) {
  const [familiar, setFamiliar] = useState({ nombre: '', parentesco: '', edad: '' });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

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

  const updateFamiliar = () => {
    const updatedFamiliares = [...formData.familiares];
    updatedFamiliares[editingIndex] = familiar;
    setFormData({ ...formData, familiares: updatedFamiliares });
    setEditingIndex(null);
    setFamiliar({ nombre: '', parentesco: '', edad: '' });
  };

  const removeFamiliar = (index) => {
    const updatedFamiliares = formData.familiares.filter((_, i) => i !== index);
    setFormData({ ...formData, familiares: updatedFamiliares });
  };

  const removeAllFamiliares = () => {
    setFormData({ ...formData, familiares: [] });
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setFamiliar(formData.familiares[index]);
    setIsModalOpen(true);
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
      {editingIndex === null ? (
        <button className="add-button" onClick={addFamiliar}>Añadir Familiar</button>
      ) : (
        <button className="update-button" onClick={updateFamiliar}>Actualizar Familiar</button>
      )}

      <button onClick={() => setIsModalOpen(true)}>Ver Familiares</button>

      {/* Modal para visualizar y editar familiares */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Lista de Familiares</h3>
            <ul>
              {formData.familiares.map((familiar, index) => (
                <li key={index}>
                  <strong>{familiar.nombre}</strong> - {familiar.parentesco} - {familiar.edad} años
                  <button onClick={() => handleEdit(index)}>Editar</button>
                  <button onClick={() => removeFamiliar(index)}>Eliminar</button>
                </li>
              ))}
            </ul>
            {formData.familiares.length > 0 && (
              <button onClick={removeAllFamiliares}>Eliminar Todos</button>
            )}
            <button onClick={() => setIsModalOpen(false)}>Cerrar</button>
          </div>
        </div>
      )}

      <div className="button-group">
        <button onClick={handlePrevious}>Anterior</button>
        <button onClick={handleNext}>Siguiente</button>
      </div>
    </div>
  );
}

export default PaginaFamiliares;
