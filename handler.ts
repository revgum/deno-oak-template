import app, { signal, logger } from "./application/application.ts";

app.use((ctx) => {
  logger.debug("Second middleware handling ctx", ctx);
  ctx.response.body = "Hello world!";
});

const hostname = "localhost";
const port = 8000;

logger.info(`Server listening on ${hostname}:${port}`);
await app.listen({ hostname, port, signal });
logger.info("Server execution complete");
