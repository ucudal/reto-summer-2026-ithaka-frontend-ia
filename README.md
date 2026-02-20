# Reto Winter 2025 - Ithaka Frontend

## Proposito  
Este proyecto tiene como objetivo desarrollar un componente de asistente conversacional con IA, diseñado para integrarse 
fácilmente en la página web de Ithaka. El componente permitirá a los usuarios interactuar con un chatbot inteligente, 
ofreciendo soporte, guía o acompañamiento en tiempo real, adaptado a las necesidades de cada proyecto o emprendimiento.  
Entre las funcionalidades principales están la respuesta a preguntas frecuentes y el acompañamiento y asesoriamiento en la 
formulación de la postulacion de proyecto a Ithaka para obtener servicios del departamento, sea financiación, mentoría u otro.


## Estructura del Repositorio

Este repositorio contiene dos componentes principales:
```
reto-winter-2025-ithaka-frontend/
├── entrepreneur-ai-assistant/     # Librería de componentes
├── testing-app/                   # Aplicación de testing
├── src/                          # Código fuente principal
└── README.md                     # Este archivo
```

1. **entrepreneur-ai-assistant**  
   Biblioteca de componentes compartibles. Su componente central es el chat con el agente de Ithaka.

2. **testing-app**  
   Aplicación simple en React + Next.js que funciona como placeholder de la página de Ithaka.

---

## Cómo construir e instalar la librería

1. Navegar a la carpeta de la librería:
    ```bash
    cd entrepreneur-ai-assistant
    ```

2. Instalar las dependencias:
    ```bash
    npm install
    ```

3. Construir el paquete `.tgz`:
    ```bash
    npm run pack
    ```
    Esto generará un archivo `entrepreneur-ai-assistant-0.1.0.tgz` en la carpeta de la librería.

4. Instalar la librería en otro proyecto (por ejemplo, en la `testing-app`):
    ```bash
    npm install path/a/el/archivo/entrepreneur-ai-assistant-0.1.0.tgz
    ```

---

## Cómo levantar la Testing App

1. Navegar a la carpeta de la app:
    ```bash
    cd testing-app
    ```

2. Instalar las dependencias:
    ```bash
    npm install
    ```

3. Crear un archivo `.env` en la raíz de la `testing-app` con el siguiente contenido:
    ```env
    NEXT_PUBLIC_COPILOT_KEY=<clave-publica-de-copilotkit>
    ```
    > Puedes obtener la clave registrándote en [CopilotKit](https://cloud.copilotkit.ai/dashboard) y generándola desde ahi.

4. Levantar la aplicación en modo desarrollo:
    ```bash
    npm run dev
    ```

    La app deberia levantarse en http://localhost:3000/
