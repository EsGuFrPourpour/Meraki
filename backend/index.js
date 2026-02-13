const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config(); // Carga variables de entorno desde .env

const app = express();
app.use(cors()); // Permite requests desde frontend
app.use(express.json()); // Parsea JSON en requests

// Conexión a MongoDB (usare Atlas)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error de conexión:', err));

// Ruta de prueba
app.get('/', (req, res) => res.send('Backend de Meraki funcionando!'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));