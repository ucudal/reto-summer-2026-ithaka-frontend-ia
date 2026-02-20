FROM node:18-alpine

WORKDIR /app

# Copiar solo lo necesario para instalar dependencias
COPY package.json ./
COPY package-lock.json ./
COPY entrepreneur-ai-assistant-0.1.0.tgz ./

# DEBUG: Verificar que los archivos están en la imagen
RUN ls -l .
RUN cat package.json

# Instalar dependencias
RUN npm install

# DEBUG: Verificar la versión instalada de cross-spawn
RUN npm ls cross-spawn

# Copiar el resto del código
COPY . .

# Build de la app Next.js
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
