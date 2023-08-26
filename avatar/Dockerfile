# FROM fedora:latest AS builder
FROM node:18 AS builder

RUN corepack enable

COPY . /app

WORKDIR /app

RUN apt-get update && apt-get install dpkg fakeroot \
  && pnpm install && pnpm make

FROM scratch AS binaries

COPY --from=builder /app/out /

FROM debian:bookworm

# RUN apt-get update && apt-get install -y \
#   libglib2.0-0 \
#   libgtk-3-0 \
#   libx11-xcb1 \
#   libxtst6 \
#   libxss1 \
#   libgconf-2-4 \
#   libnss3 \
#   libasound2 \
#   libdrm2 \
#   && apt-get clean && rm -rf /var/lib/apt/lists/*

RUN apt-get update -y && apt-get install -y \
  kde-cli-tools \
  trash-cli \
  libglib2.0-bin 

WORKDIR /app

COPY --from=builder /app/out/make/deb/x64 .
RUN ls -al && dpkg -i *.deb

ENTRYPOINT [ "avatar" ]