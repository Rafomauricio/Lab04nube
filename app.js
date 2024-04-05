const express = require('express');
const app = express();
const PORT = 5000;


app.get('/', (req, res) => {
  res.send('¡Hola! Esta es la página principal de mi aplicación.');
});


app.get('/clientes', (req, res) => {
  const clientes = ['rafo', 'mauricio', 'huahuisa'];
  res.json(clientes);
});


app.get('/productos', (req, res) => {
  const productos = ['cuaderno', 'folder', 'plumon'];
  res.json(productos);
});


app.listen(PORT, () => {
  console.log(`Servidor Express ejecutándose en el puerto ${PORT}`);
});
