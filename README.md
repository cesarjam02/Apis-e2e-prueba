Hola! Adjunto mi trabajo de automatizaciones.
Eh trabajado con la opcion 1 en las automatizaciones como e2e y APIS.


# Instrucciones para la ejecución de pruebas con Cypress

Este archivo contiene las instrucciones detalladas para ejecutar pruebas REST usando Cypress en los servicios de **signup** y **login** proporcionados por la API de Demoblaze. 
Y a su vez, las pruebas e2e

## 1. Instalación del entorno

Antes de ejecutar las pruebas, asegúrate de tener instalado Node.js y Cypress en tu entorno. Sigue estos pasos para preparar el entorno de pruebas:

### 1. Clonar el repositorio

1. Clona este repositorio que contiene el proyecto
2. Instalar las dependencias
 
  -- npm install
 
Esto descargará e instalará todas las dependencias definidas en el archivo `package.json`.

## 2. Ejecución de las pruebas

Una vez que el entorno esté configurado, hay dos maneras principales de ejecutar las pruebas: usando **Cypress Test Runner** (modo interactivo) o ejecutando las pruebas en **modo headless** (desde la línea de comandos).
A mi personalmente me gusta correrlo de manera interactiva.

### 3. Ejecutar Cypress Test Runner (modo interactivo)

Para correr las pruebas de manera interactiva, sigue estos pasos:

1. Abre **Cypress Test Runner** utilizando el siguiente comando:
  
   -- npx cypress open
 
2. Se abrirá una ventana de Cypress donde podrás seleccionar el archivo de prueba `ApiDemoBlazvy.cy.js` o `demoblaze.cy.js`

3. Haz clic en el archivo para ejecutar todas las pruebas. 


## 4. Descripción de las pruebas incluidas

El archivo de pruebas `ApiDemoBlazvy.cy.js` contiene los siguientes casos de prueba para los servicios de **signup** y **login** de **Demoblaze**:

1. **Signup - Crear un nuevo usuario**: 
   - Verifica que es posible registrar un nuevo usuario con un nombre de usuario y contraseña proporcionados.

2. **Signup - Intentar crear un usuario ya existente**:
   - Intenta registrar un usuario que ya existe en el sistema y verifica que la API devuelva un error adecuado.

3. **Login - Con credenciales correctas**:
   - Verifica que es posible iniciar sesión utilizando un usuario y contraseña válidos.

4. **Login - Con credenciales incorrectas**:
   - Verifica que el sistema rechaza el intento de iniciar sesión con un nombre de usuario o contraseña incorrectos.

## 5. Descripción de las pruebas incluidas e2e

1. Agregar 2 productos al carrito
2. Visualizar carrito
3. Completar el formulario de compra
4. Finalizar compra

