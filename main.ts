import { app, signal, logger } from "./application/mod.ts";
import { APP_HOST, APP_PORT } from "./constants.ts";

app.use((ctx) => {
  logger.debug("main.ts handling ctx", ctx);
  ctx.response.body = "Hello world!";
});

logger.info(`Server listening on ${APP_HOST}:${APP_PORT}`);
await app.listen({ hostname: APP_HOST, port: APP_PORT, signal });
logger.info("Server execution complete");
