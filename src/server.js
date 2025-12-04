// src/server.js
import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { logger } from './middleware/logger';
import { notFoundHandler } from './middleware/notFoundHandler';
import { errorHandler } from './middleware/errorHandler';
import { connectMongoDB } from './db/connectMongoDB';
import notesRoutes from './routes/notesRoutes';

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(logger);
app.use(express.json());
app.use(cors());

app.use(notesRoutes);

app.use(notFoundHandler);
app.use(errorHandler);
await connectMongoDB();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
