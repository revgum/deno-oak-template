import { app, signal, logger } from "./application/mod.ts";
import { APP_HOST, APP_PORT } from "./constants.ts";

app.use((ctx) => {
  logger.info("main.ts handling ctx", ctx);
  ctx.response.body = "Hello world!";
});

logger.info(`Server listening on ${APP_HOST}:${APP_PORT}`);
// Execute a single request and kill the process, akin to a lambda type execution
// await app.listen({ hostname: APP_HOST, port: APP_PORT, signal });

// Keep the server alive and listening
await app.listen({ hostname: APP_HOST, port: APP_PORT });
logger.info("Server execution complete");
