import { Application, Context } from "./deps.ts";
import log from "./log.ts";

const logger = log.getLogger();

const controller = new AbortController();
const { signal } = controller;
const app = new Application();

app.use(async (ctx: Context, next: any) => {
  logger.debug("appBase controller handling context --->", ctx);
  await next();
  logger.debug("appBase closing connection");
  controller.abort();
});

export { app, logger, signal };
