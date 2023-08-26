# FROM fedora:latest AS builder
FROM node:18 AS builder

RUN corepack enable

COPY . /app

WORKDIR /app

RUN pnpm install && pnpm package

FROM scratch AS binaries

COPY --from=builder /app/out /

FROM debian:bookworm-slim

WORKDIR /app

COPY --from=builder /app/out .

ENTRYPOINT [ "./out/avatar-linux-arm64/avatar" ]