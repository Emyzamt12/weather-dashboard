import React from 'react';

function WeatherCards({ data }) {
  if (!data) return <p style={{ textAlign: 'center', color: '#666' }}>Cargando sensores...</p>;

  // Estilo común para todas las tarjetas
  const cardStyle = {
    background: '#ffffff',
    border: '1px solid #e0e0e0', // Borde gris suave como en la imagen
    borderRadius: '10px',
    padding: '25px 35px',
    minWidth: '200px', // Un poco más anchas
    boxShadow: '0 2px 5px rgba(0,0,0,0.05)', // Sombra muy sutil
    textAlign: 'center',
  };

  // Estilo para el título de la métrica (Temperatura, Presión, etc.)
  const labelStyle = {
    color: '#666666', // Gris medio
    fontSize: '16px',
    fontWeight: '600',
    marginBottom: '15px',
    marginTop: '0'
  };

  // Estilo para el valor numérico
  const valueStyle = {
    fontSize: '28px', // Más grande
    fontWeight: 'bold',
    color: '#005baa', // Azul principal
    margin: '0'
  };

  return (
    <div style={{ display: 'flex', gap: '30px', justifyContent: 'center', flexWrap: 'wrap', margin: '30px 0' }}>
      {/* Tarjeta de Temperatura */}
      <div style={cardStyle}>
        <h3 style={labelStyle}>Temperatura</h3>
        <p style={valueStyle}>{data.temp} °C</p>
      </div>

      {/* Tarjeta de Presión */}
      <div style={cardStyle}>
        <h3 style={labelStyle}>Presión</h3>
        <p style={valueStyle}>{data.presion} hPa</p>
      </div>

      {/* Tarjeta de Humedad */}
      <div style={cardStyle}>
        <h3 style={labelStyle}>Humedad</h3>
        <p style={valueStyle}>{data.humedad} %</p>
      </div>
    </div>
  );
}

export default WeatherCards;