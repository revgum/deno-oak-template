# Quick start

`./run.sh` : The default execution, starts the app in Docker

`./run.sh docker run` : Starts the app in Docker

`./run.sh docker shell` : Starts a shell session in the Docker image

`./run.sh local` : Starts the app using locally installed Deno

## Code structure notes

- `main.ts` : The primary entrypoint for the application and its endpoints.
- `deps.ts` : The application-specic dependencies.
- `constants.ts` : Application constants sourced from ENV or otherwise set.
- `application/*` : Code that is intended to be generic to the underlying Oak server and common middleware for a basic controller and logging.

## Other notes

- `run.sh` : A handy script for launching the application with docker or localhost.
- `build.sh` : Build the application to a javascript bundle using Deno, was initially intended as a build step for publishing an AWS Lambda but this doesn't seem necessary any longer.
- `.env` : Environment variables used in the Dockerfile and by the application by way of `constants.ts`.
