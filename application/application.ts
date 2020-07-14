import { Application, Context } from "./deps.ts";
import log from "./log.ts";

const logger = log.getLogger();

const controller = new AbortController();
const { signal } = controller;
const app = new Application();

app.use(async (ctx: Context, next: any) => {
  logger.info("appBase controller handling context --->", ctx);
  await next();
  logger.info("appBase closing connection");
  controller.abort();
});

export { logger, signal };

export default app;
