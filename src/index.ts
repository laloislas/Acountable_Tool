import express from "express";
import router__client from "./routes/client__route";
const bodyParser = require('body-parser');
const PORT = 3000;
const app = express();
app.use(express.json());

//Nos ayuda a convertir lo enviado pos REST a json 
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));// se debe colocar antes de las ruta
app.use(bodyParser.json({ limit: "50mb" }));  // se debe colocar antes de las rutas, Aumentamos el tamaño del json soluciona el problema para enviar base64 demasiado largo
//settings
app.set('json spaces', 2);

//Router
app.use('/api/client', router__client);

app.listen(PORT, () => {
  console.log("Servidor corriendo " + PORT);
});
