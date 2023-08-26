# FROM fedora:latest AS builder
FROM node:18 AS builder

RUN corepack enable

COPY . /app

WORKDIR /app

RUN pnpm install && pnpm package

FROM scratch AS binaries

COPY --from=builder /app/out /

FROM debian:bookworm-slim

RUN apt-get update && apt-get install -y \
  libgobject-2.0-0 \
  libgtk-3-0 \
  libx11-xcb1 \
  libxtst6 \
  libxss1 \
  libgconf-2-4 \
  libnss3 \
  libasound2 \
  && apt-get clean && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY --from=builder /app/out .

ENTRYPOINT [ "./avatar-linux-x64/avatar" ]