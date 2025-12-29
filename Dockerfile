FROM oven/bun:1 AS base
WORKDIR /app

COPY package.json bun.lockb ./

FROM base AS prod-deps
RUN bun install --frozen-lockfile --production --no-save

FROM base AS build-deps
RUN bun install --frozen-lockfile --no-save

FROM build-deps AS build
COPY . .
RUN bun run build

FROM base AS runtime
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
CMD ["bun", "./dist/server/entry.mjs"]