FROM hayd/alpine-deno:1.2.0

EXPOSE 8000

WORKDIR /app

USER deno

# Copy and cache the application base dependencies
COPY application/deps.ts application/
RUN deno cache application/deps.ts

# Copy and cache the application dependencies
COPY deps.ts .
RUN deno cache deps.ts

# Add the full application, check and cache remaining imports
ADD . .
RUN deno cache main.ts

CMD ["run", "--allow-net", "--allow-write", "main.ts"]
