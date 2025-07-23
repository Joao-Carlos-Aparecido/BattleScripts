// src/server.ts
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
// Definindo __filename e __dirname para ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = 8080;
// Serve arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, '..', 'public')));
// Serve arquivos da pasta 'dist' através de /dist
app.use('/dist', express.static(path.join(__dirname, '..', 'dist')));
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
