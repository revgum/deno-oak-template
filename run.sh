#!/bin/bash
# Load the .env as ENV variables
set -a
. ./.env
set +a

GREEN='\033[1;32m'
NC='\033[0m' # No Color

if [ "$1" == "" ]
then
  echo '#######'
  echo '# Usage'
  echo '# `./run.sh [docker] [run]` : Starts the app in Docker'
  echo '# `./run.sh docker shell`   : Starts a shell session in the Docker image'
  echo '# `./run.sh local`          : Starts the app using locally installed Deno'
  echo ''
  echo -e "${GREEN}Starting default execution, launching the application in Docker...${NC}"
  echo ''
fi


if [ "$1" == "docker" ] || [ "$1" == "" ]
then
  docker build -t deno-app -q .
  if [ "$2" == "run" ] || [ "$2" == "" ]
  then
    docker run -it --init -p $APP_PORT:$APP_PORT -v $PWD/log:/app/log --env-file .env deno-app
  elif [ "$2" == "shell" ]
  then
    docker run -it --init -p $APP_PORT:$APP_PORT -v $PWD/log:/app/log --env-file .env --entrypoint sh deno-app
  fi
elif [ "$1" == "local" ]
then
  deno run --allow-write --allow-net --allow-env main.ts
fi
