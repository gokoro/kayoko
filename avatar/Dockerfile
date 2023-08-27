# FROM fedora:latest AS builder
FROM node:18 AS builder

RUN corepack enable

COPY . /app

WORKDIR /app

RUN apt-get update && apt-get install dpkg fakeroot \
  && pnpm install && pnpm make

FROM scratch AS binaries

COPY --from=builder /app/out /

# FROM debian:bookworm
FROM nvidia/cuda:12.2.0-devel-ubuntu20.04

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
  libglib2.0-bin \
  xvfb \
  ffmpeg

WORKDIR /app

ENV TZ=Asia/Seoul
ENV DISPLAY=:10.0

COPY --from=builder /app/out/make/deb .

ARG BUILDARCH

RUN if [ "$BUILDARCH" = "amd64" ]; then \
  dpkg -i x64/*.deb || (apt-get -f install -y && dpkg -i x64/*.deb); \
  elif [ "$BUILDARCH" = "arm64" ]; then \
  dpkg -i arm64/*.deb || (apt-get -f install -y && dpkg -i arm64/*.deb); \
  else \
  echo "Unsupported architecture"; \
  fi

# ENTRYPOINT xvfb-run -n 10 -s '-screen 0 1000x1200x24' avatar --no-sandbox
# ENTRYPOINT [ "xvfb-run -n 10 -s '-screen 0 1000x1200x24' avatar --no-sandbox" ]
ENTRYPOINT Xvfb :10 -screen 0 1000x1200x24 & avatar --no-sandbox --headless
# ENTRYPOINT [ "Xvfb :10 -screen 0 1000x1200x24 & avatar --no-sandbox" ]