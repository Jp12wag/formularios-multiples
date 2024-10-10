function PresentacionDatos({ formData, handlePrevious }) {
    console.log(formData);
    return (
      <div>
        <h2>Resumen de Datos</h2>
        <div className="data-preview">
          <h3>Datos Personales:</h3>
          <p>Nombre: {formData.persona.nombre}</p>
          <p>Apellido: {formData.persona.apellido}</p>
          <p>Fecha de Nacimiento: {formData.persona.fechaNacimiento}</p>
          
          <h3>Familiares:</h3>
          <ul>
            {formData.familiares.map((familiar, index) => (
              <li key={index}>{familiar.nombre} - {familiar.parentesco} ({familiar.edad} años)</li>
            ))}
          </ul>
  
          <h3>Condiciones Pre-Existentes:</h3>
          <ul>
            {formData.condicionesPreExistentes.map((condicion, index) => (
              <li key={index}>{condicion.enfermedad} - {condicion.tiempo} años</li>
            ))}
          </ul>
  
          <h3>Internamientos:</h3>
          <ul>
            {formData.internamientos.map((internamiento, index) => (
              <li key={index}>{internamiento.fecha} - {internamiento.centroMedico} ({internamiento.diagnostico})</li>
            ))}
          </ul>
        </div>
        <button onClick={handlePrevious}>Anterior</button>
        <button onClick={handlePrevious}>Enviar</button>
      </div>
    );
  }
export default PresentacionDatos  