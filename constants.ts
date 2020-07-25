const { APP_HOST, APP_PORT: port } = Deno.env.toObject();
const APP_PORT = parseInt(port, 10);

export { APP_HOST, APP_PORT };
