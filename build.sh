mkdir -p dist 2>/dev/null
deno bundle handler.ts > dist/handler.bundle.js
