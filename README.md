# 🌤️ Estación Meteorológica - Weather Dashboard

Un panel de control interactivo y moderno construido con **React** y **Vite**, que consume datos en tiempo real de sensores meteorológicos almacenados en **Supabase**.

![Demo de la Estación Meteorológica](https://via.placeholder.com/800x450.png?text=Weather+Dashboard+Preview)

---

## 🚀 Características

* **Monitoreo en Tiempo Real:** Muestra las últimas lecturas de temperatura, presión atmosférica y humedad.
* **Auto-actualización (Polling):** Refresca los datos automáticamente cada 30 segundos sin necesidad de recargar la página.
* **Historial de Lecturas:** Tabla detallada con los últimos registros ordenados por fecha y hora local.
* **Diseño Minimalista y Responsive:** Interfaz limpia adaptada para una visualización clara de las métricas.

---

## 🛠️ Tecnologías Utilizadas

* **Frontend:** [React](https://react.dev/) + [Vite](https://vitejs.dev/)
* **Backend / Base de Datos:** [Supabase](https://supabase.com/) (PostgreSQL + API REST)
* **Cliente HTTP / SDK:** `@supabase/supabase-js`
* **Estilos:** CSS-in-JS (Inline styles modularizados)

---

## 📁 Estructura del Proyecto

```text
weather-dashboard/
├── src/
│   ├── api/
│   │   └── supabase.js      # Configuración del cliente Supabase y peticiones
│   ├── components/
│   │   └── WeatherCards.jsx # Componente visual de tarjetas de sensores
│   ├── pages/
│   │   └── Dashboard.jsx    # Página principal con el resumen e historial
│   ├── App.jsx              # Componente raíz
│   └── main.jsx             # Punto de entrada de la aplicación
├── .env.local               # Variables de entorno (No subir a GitHub)
├── .gitignore
├── package.json
└── README.md
