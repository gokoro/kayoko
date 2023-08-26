FROM fedora:latest AS builder

RUN dnf update -y \
  && dnf install rpm-build -y \
  && dnf install nodejs -y \
  && dnf install git -y 

RUN curl -fsSL https://get.pnpm.io/install.sh | sh -

COPY . /app

WORKDIR /app

# RUN pnpm install && pnpm make
RUN npm install && npm run make

FROM scratch AS binaries

COPY --from=builder /app/out /
