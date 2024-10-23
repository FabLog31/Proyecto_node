// El archivo app.js es el archivo de ejecución de nuestro aplicativo web 

// Vamos a configurar nuestro servidor con EXPRESS y vamos a gestionar todo lo relacionado con la lógica del negocio -> Bases de datos, peticiones, respuestas

// 1. IMPORTAR LAS DEPENDENCIAS Y MÓDULOS QUE NECESITAMOS 

import express from "express" // ECMAS 6

// 2. Configurar el uso de nuestro servidor 
const app = express();
const port = 3000;  //también sirven el puerto 6000 y 9000 

// Ejecutar el servidor en nuestro computador 
app.listen(port, ()=>{
    console.log("el servidor está ejecutándose correctamente, en el puerto ", port);
});


