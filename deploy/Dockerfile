##############################
## Building
##############################
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /usr/src/app

# Set npm loglevel
ENV NPM_CONFIG_LOGLEVEL=warn

# Copy "package.json" and "package-lock.json" before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY ./package*.json ./
COPY ./yarn.lock ./
COPY ./.yarnrc.yml ./
COPY ./.yarn ./.yarn

# Install dependencies
RUN yarn install --immutable

# Copy all files
COPY ./ ./

# Set node env
ENV NODE_ENV=production
ENV NITRO_PRESET=node_cluster

# Build app
RUN yarn build

# Final image
FROM node:20-alpine

# Update the package list and install curl and wget
RUN apk add --no-cache curl

# Set env
ENV NODE_ENV=production

# Set working directory
WORKDIR /usr/src/app

# Copy .output from builder
COPY --from=builder /usr/src/app/.output/ /usr/src/app/.output/

# Build Information
ARG BUILD_VERSION
ARG BUILD_DATE

# for endpoint /ping return version
ENV BUILD_VERSION=${BUILD_VERSION}
# for endpoint /ping return date build
ENV BUILD_DATE=${BUILD_DATE}
# for datadog version visibility
ENV DD_VERSION=${BUILD_VERSION}


ENV NITRO_PORT=3000

EXPOSE 3000

# Run container as non-root (unprivileged) user
# The "node" user is provided in the Node.js Alpine base image
USER node

CMD [ ".output/server/index.mjs" ]
