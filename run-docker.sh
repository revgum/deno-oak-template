docker build -t deno-app . && docker run -it --init -p 8000:8000 -v $PWD/log:/app/log deno-app
