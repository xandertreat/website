# syntax=docker/dockerfile:1.7

# node.js
ARG NODE_VERSION=20
FROM node:${NODE_VERSION}-slim
ENV NODE_ENV=production

RUN apt-get update -qq && \
    apt-get install -y --no-install-recommends \
    bash \
    wget \
    unzip \
    ca-certificates && \
    rm -rf /var/lib/apt/lists/*

# Bun
ENV BUN_INSTALL=/usr/local
ARG BUN_VERSION=1.2.15
ARG BUN_RELEASE=bun-linux-x64-baseline
RUN bash -euxo pipefail -c "\
    wget -q 'https://github.com/oven-sh/bun/releases/download/bun-v${BUN_VERSION}/${BUN_RELEASE}.zip' -O /tmp/bun.zip && \
    unzip /tmp/bun.zip -d /tmp && \
    mv '/tmp/${BUN_RELEASE}/bun' '${BUN_INSTALL}/bin/bun' && \
    chmod +x '${BUN_INSTALL}/bin/bun' && \
    bun --version && \
    rm -rf /tmp/bun* \
"

# Install deps.
WORKDIR /app

COPY bun.lock* package.json ./

RUN --mount=type=cache,target=/root/.bun \
    bun install --frozen-lockfile

COPY . .

# CI pipeline (build)
RUN bun ci

# Non‑root user for security
RUN addgroup --system app \
    && adduser --system --ingroup app app
USER app

# Launch

CMD ["node", ".output/server/index.mjs"]
