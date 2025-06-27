# Stage 1: Build Frontend
FROM node:lts-slim

ARG VITE_API_ENDPOINT
ARG VITE_AZURE_CLIENT_ID
ARG VITE_AZURE_AUTHORITY

ENV VITE_ALLOWED_HOST=$VITE_API_ENDPOINT
ENV VITE_AZURE_CLIENT_ID=$VITE_AZURE_CLIENT_ID
ENV VITE_AZURE_TENANT_ID=$VITE_AZURE_AUTHORITY


WORKDIR /app/web

COPY web/package*.json ./
RUN npm install

COPY web/ .

# Create a non-root user and group
RUN addgroup --system appgroup && adduser --system --ingroup appgroup appuser

# Set working directory
WORKDIR /app

# Install backend dependencies
COPY backend/package*.json ./backend/
RUN cd web && npm run build
RUN cd backend && npm install


# Copy backend source code
COPY backend ./backend



# Set correct permissions
RUN chown -R appuser:appgroup /app

# Switch to non-root user
USER appuser

# Set working dir to backend
WORKDIR /app/backend

# Expose backend port
EXPOSE 3000

# Run the app (assuming production mode)
CMD ["npm", "run","start"]
