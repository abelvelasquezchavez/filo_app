
import express from 'express';
import reglaRoutes from './routes/reglas.routes';
// @ts-ignore
import cors from 'cors';

const app = express();

// Configuración básica de CORS
const corsOptions = {
  origin: true,
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());
app.use('/api', reglaRoutes);

export default app;





// 👇 Agrega esta línea antes de las rutas





