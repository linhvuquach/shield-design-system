FROM node:18-alpine AS base

FROM base AS builder
RUN apk add --no-cache libc6-compat
RUN apk update

RUN yarn global add turbo
WORKDIR /app
COPY . .

RUN turbo prune --scope=@linhvuquach/shield-react --docker

FROM base AS installer
RUN apk add --no-cache libc6-compat
RUN apk update
WORKDIR /app
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/yarn.lock ./yarn.lock
COPY turbo.json turbo.json
COPY .build-info.ts .build-info.ts
RUN yarn install --frozen-lockfile

COPY --from=builder /app/out/full/ .

FROM base as runner
WORKDIR /app
# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

COPY --from=installer /app/apps/shield-react/next.config.js .
COPY --from=installer /app/apps/shield-react/package.json .

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=installer --chown=nextjs:nodejs /app/apps/shield-react/next-build/standalone ./
COPY --from=installer --chown=nextjs:nodejs /app/apps/shield-react/next-build/static ./apps/shield-react/next-build/static
COPY --from=installer --chown=nextjs:nodejs /app/apps/shield-react/public ./apps/shield-react/public

CMD [ "node", "apps/shield-react/server.js" ]
