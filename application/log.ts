import { log, LogRecord } from "./deps.ts";

const argsString = (args: any[]): string => {
  if (!args.length) return "";
  if (args.length === 1) return JSON.stringify(args[0]);
  return JSON.stringify({ loggerArgs: args });
};

const formatter = (r: LogRecord): string => {
  const datetime = r.datetime.toISOString();
  return `${datetime} ${r.levelName} - ${r.msg} ${argsString(r.args)}`;
};

await log.setup({
  handlers: {
    console: new log.handlers.ConsoleHandler("DEBUG", {
      formatter,
    }),

    file: new log.handlers.FileHandler("DEBUG", {
      filename: "./log/log.txt",
      formatter,
    }),
  },

  loggers: {
    // configure default logger handlers
    default: {
      level: "DEBUG",
      handlers: ["console", "file"],
    },
    // logger.getLogger("error") returns this logger
    error: {
      level: "ERROR",
      handlers: ["console"],
    },
  },
});

export default log;
