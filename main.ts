import { app, signal, logger } from "./application/mod.ts";

app.use((ctx) => {
  logger.debug("Second middleware handling ctx", ctx);
  ctx.response.body = "Hello world!";
});

const hostname = "0.0.0.0";
const port = 8000;

logger.info(`Server listening on ${hostname}:${port}`);
await app.listen({ hostname, port, signal });
logger.info("Server execution complete");
