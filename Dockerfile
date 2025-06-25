# Stage 1: Build Frontend
FROM node:lts-slim AS frontend

WORKDIR /app/web

COPY web/package*.json ./
RUN npm install

COPY web/ .

RUN npm run build


# Stage 2: Setup Backend and Serve Frontend
FROM node:lts-slim AS backend

# Create a non-root user and group
RUN addgroup --system appgroup && adduser --system --ingroup appgroup appuser

# Set working directory
WORKDIR /app

# Install backend dependencies
COPY backend/package*.json ./backend/
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
