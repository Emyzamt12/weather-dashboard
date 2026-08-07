import React, { useState, useEffect } from 'react';
import { getDatosSensor } from '../api/supabase';
import WeatherCards from '../components/WeatherCards';

function Dashboard() {
  const [datos, setDatos] = useState([]);
  const [cargando, setCargando] = useState(true);

  const cargarDatos = async () => {
    try {
      const resultado = await getDatosSensor(10);
      setDatos(resultado);
    } catch (error) {
      console.error('No se pudieron cargar los datos:', error);
    } finally {
      setCargando(false);
    }
  };

  useEffect(() => {
    cargarDatos();
    const intervalo = setInterval(cargarDatos, 30000);
    return () => clearInterval(intervalo);
  }, []);

  // Estilos comunes para las celdas de la tabla
  const cellStyle = {
    padding: '12px 20px',
    textAlign: 'center',
    borderBottom: '1px solid #f0f0f0',
  };

  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', padding: '40px 20px', fontFamily: '"Segoe UI", Roboto, Arial, sans-serif' }}>
      
      {/* Título Principal */}
      <h1 style={{ color: '#005baa', fontSize: '38px', fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' }}>
        Estación Meteorológica
      </h1>

      {cargando ? (
        <p style={{ textAlign: 'center', color: '#666' }}>Cargando...</p>
      ) : (
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          
          {/* Tarjetas Superiores */}
          <WeatherCards data={datos[0]} />

          {/* Subtítulo Historial */}
          <h2 style={{ marginTop: '40px', marginBottom: '20px', color: '#555', fontSize: '18px', fontWeight: '600', textAlign: 'center' }}>
            Historial de Lecturas
          </h2>

          {/* Tabla de Lecturas */}
          <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#ffffff' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #005baa' }}>
                <th style={{ ...cellStyle, color: '#444', fontWeight: 'bold' }}>Fecha y Hora</th>
                <th style={{ ...cellStyle, color: '#444', fontWeight: 'bold' }}>Temp (°C)</th>
                <th style={{ ...cellStyle, color: '#444', fontWeight: 'bold' }}>Presión (hPa)</th>
                <th style={{ ...cellStyle, color: '#444', fontWeight: 'bold' }}>Humedad (%)</th>
              </tr>
            </thead>
            <tbody>
              {datos.map((lectura) => (
                <tr key={lectura.id || lectura.created_at}>
                  <td style={{ ...cellStyle, color: '#555' }}>
                    {new Date(lectura.created_at).toLocaleString()}
                  </td>
                  <td style={{ ...cellStyle, color: '#333' }}>{lectura.temp}</td>
                  <td style={{ ...cellStyle, color: '#333' }}>{lectura.presion}</td>
                  <td style={{ ...cellStyle, color: '#333' }}>{lectura.humedad}</td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      )}
    </div>
  );
}

export default Dashboard;