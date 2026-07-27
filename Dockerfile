FROM oven/bun:1-alpine AS build
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile
COPY . .
# NEXT_PUBLIC_* are inlined at build time — pass with --build-arg, not at runtime.
ARG NEXT_PUBLIC_SITE_URL
ARG NEXT_PUBLIC_OPEN_IN_NEW_TAB
RUN bun run build

FROM oven/bun:1-alpine
WORKDIR /app
ENV NODE_ENV=production PORT=3000 HOSTNAME=0.0.0.0
COPY --from=build /app/public ./public
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./.next/static
USER bun
EXPOSE 3000
CMD ["bun", "server.js"]
