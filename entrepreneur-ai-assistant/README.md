# entrepreneur-ai-assistant

Librería de componentes React con chatbot de asistencia para emprendedores.

## Build de la librería

Para compilar la librería (JavaScript y archivos de tipos TypeScript):

```bash
npm run build
```

Este comando realizará:

1. Generación de archivos `.d.ts` (declaration files) usando TypeScript.
2. Compilación de los bundles JavaScript (ESM y CommonJS) en la carpeta `dist/`.

## Agregar o actualizar componentes

1. Crear un nuevo archivo de componente dentro de la carpeta `src/`:

```
src/
  NuevoComponente.tsx
```

2. Exportar el componente desde `src/index.ts` para incluirlo en el bundle:

```ts
export { NuevoComponente } from './NuevoComponente';
```

Si el componente se exporta por default, se debe exportar así:

```ts
export { default as NuevoComponente } from './NuevoComponente';
```

3. Ejecutar el build nuevamente:

```bash
npm run build
```

4. Empaquetar la libreria a un `.tar`  

```bash  
npm pack
```

5. Compartir el `.tar` a donde se quiera usar la libreria

## Agregar o actualizar dependencias

### Dependencias de runtime (por ejemplo, lodash)

```bash
npm install lodash
```

### Dependencias de desarrollo (herramientas de build, linting, etc.)

```bash
npm install -D eslint prettier tsup
```

### Peer Dependencies (React, ReactDOM)

Asegurarse de que `react` y `react-dom` estén declaradas como `peerDependencies` en el `package.json` para evitar duplicados:

```json
"peerDependencies": {
  "react": "^18.0.0",
  "react-dom": "^18.0.0"
}
```

## Uso local en otros proyectos (desarrollo o testing local)

### Opción 1: npm link (modo desarrollo)

1. En la carpeta de la librería:

```bash
npm link
```

2. En la carpeta del proyecto donde se desea utilizar la librería:

```bash
npm link entrepreneur-ai-assistant
```

3. Importar y usar en el código:

```tsx
import { WeatherCard } from 'entrepreneur-ai-assistant';
```

4. Para mantener los cambios en tiempo real, ejecutar en la librería:

```bash
npm run build -- --watch
```

### Opción 2: Instalar como dependencia local (ruta relativa)

1. Realizar el build de la librería

2. En el proyecto donde se desea utilizar la librería, instalarla desde ruta local:

```bash
npm install ../ruta/a/entrepreneur-ai-assistant.tar
```

3. Importar y usar en el código como un paquete normal:

```tsx
import { WeatherCard } from 'entrepreneur-ai-assistant';
```


---