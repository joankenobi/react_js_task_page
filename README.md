# react_js_task_page
Page todo app with react client for django project.

# NVM AND NODE JS

This project was developed with nvm (https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating).

For run a node version with nvm, you can use the following command:

```bash
nvm use (version)
```

## Pasos para empezar un proyecto en react con vite

Vite es un bundler que permite trabajar con react de manera rapida y sencilla. Se ejecuta mas rapido y consume menos recursos que webpack.

### 1. Crear un proyecto con vite

Para crear un proyecto con vite se debe ejecutar el siguiente comando:

```bash
$ npm create vite@latest

#npm init @vitejs/app (copilot)
```


### 2. Seleccionar la plantilla de react

Al ejecutar el comando anterior se debe seleccionar la plantilla de react.

```bash
Select a framework: › react
```

### 3. Seleccionar el template

Se debe seleccionar el template que se desea utilizar.

```bash
Select a variant: › react
```

### 4. Instalar las dependencias

Se debe instalar las dependencias del proyecto.

```bash
cd react_js_task_page
npm install
```

### 5. Ejecutar el proyecto

Para ejecutar el proyecto se debe ejecutar el siguiente comando:

```bash
npm run dev
```

## instalar dependencias
### instalar react-router-dom
```bash
npm install react-router-dom
```
libreria para tener multiples paginas en el frontend

### instalar react-hot-toast

```bash
npm install react-hot-toast
```
libreria para mostrar notificaciones (mensajitos para eliminar y actualizar) en el frontend

### instalar axios

```bash
npm install axios
```
libreria para hacer peticiones http

fetch es una alternativa a axios pero fetch requiere de cabeceras y convertir a json la informacion.

### instalar react-hook-form

```bash
npm install react-hook-form
```
libreria para manejar formularios en react, permite validar el input que creemos en el frontend