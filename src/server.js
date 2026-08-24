import "dotenv/config";
import app from "./app.js";

const PORT = process.env.PORT ?? 3000;

const server = app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

server.on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.error(`A porta ${PORT} ja esta em uso.`);
    process.exit(1);
  }

  console.error("Erro ao iniciar o servidor:", err);
  process.exit(1);
});