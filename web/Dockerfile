FROM alpine:latest
RUN apk add curl
RUN apk add yarn
RUN apk add util-linux
RUN apk add --update nodejs

COPY . /app

WORKDIR /app

RUN yarn install


EXPOSE 3000

CMD ["yarn","start","-H", "0.0.0.0"]