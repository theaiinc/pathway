# Stage 1: Build
FROM node:18-slim AS builder
WORKDIR /usr/src/app

# Copy root dependency files
COPY package.json package-lock.json nx.json ./

# Copy application-specific dependency file
COPY pathway/apps/api/package.json ./pathway/apps/api/

# Copy source code
COPY pathway/apps/api/src ./pathway/apps/api/src
COPY pathway/libs/pathway/src ./pathway/libs/pathway/src

# Install dependencies for the entire monorepo
RUN npm install

# Build the specific API application
RUN npx nx build api

# Stage 2: Production
FROM node:18-slim
WORKDIR /usr/src/app

# Create a non-root user
RUN addgroup --system nonroot && adduser --system --ingroup nonroot nonroot
USER nonroot

# Copy built artifacts from the builder stage
COPY --from=builder /usr/src/app/dist/apps/api .

# Copy production node_modules
# This assumes the build process correctly prunes devDependencies.
# If not, a more specific `npm install --production` would be needed here.
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/package.json ./package.json
COPY --from=builder /usr/src/app/pathway/apps/api/package.json ./package.json

EXPOSE 3001
CMD ["node", "main.js"] 