FROM oven/bun:alpine AS build
WORKDIR /app
COPY bun.lock* package.json ./
RUN --mount=type=cache,target=/root/.bun \
    bun install --production --frozen-lockfile
COPY . .
RUN bun run build

# Deploy
FROM gcr.io/distroless/nodejs20-debian12:nonroot
COPY --from=build /app/.output/ ./
ENV NODE_ENV=production

EXPOSE 3000
CMD ["server/index.mjs"]