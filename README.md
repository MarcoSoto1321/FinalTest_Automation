# Proyecto de Automatización: Pruebas de Mercado Libre

Este proyecto contiene una prueba automatizada E2E (End-to-End) para el sitio web de **Mercado Libre**. El escenario de prueba, escrito en **Gherkin**, verifica el flujo de búsqueda, filtrado y ordenamiento de productos.

## Escenario Principal

**Escenario:** Búsqueda de "playstation 5" nuevos en CDMX ordenados por mayor precio.

## Tecnologías Utilizadas

- **Framework:** CodeceptJS
- **Driver:** Playwright
- **Lenguaje:** JavaScript (Node.js)
- **Metodología:** BDD (Behavior-Driven Development) con Gherkin
- **Reportes:** Allure

## Prerrequisitos

Asegúrate de tener instalado lo siguiente:

- **Node.js** (versión LTS recomendada)
- **npm** (instalado automáticamente con Node.js)
- **Allure Commandline** para generar y visualizar reportes

> Consulta la documentación oficial de Allure para instrucciones de instalación por sistema operativo.

## Instalación y Configuración

### 1- Clonar el repositorio

```bash
git clone https://github.com/MarcoSoto1321/FinalTest_Automation.git
```

### 2- Navegar a la carpeta del proyecto

```bash
cd FinalTest_Automation
```

### 3- Instalar dependencias

```bash
npm install
```

Esto instalará CodeceptJS, Playwright y demás dependencias definidas en el `package.json`.

## ▶️ Ejecución de Pruebas

Ejecutar pruebas con Allure:

```bash
npx codeceptjs run --plugins allure
```

Ejecutar con pasos visibles:

```bash
npx codeceptjs run --steps --plugins allure
```

Los resultados se generarán en `./output/allure-results`.

## 📊 Generación del Reporte Allure

### Servir el reporte (modo dinámico)

```bash
allure serve output/allure-results
```

### Generar reporte estático (opcional)

```bash
allure generate output/allure-results -o allure-report --clean
```

Abrir manualmente el archivo `allure-report/index.html` en tu navegador para visualizar el reporte.

---
## Capturas del reporte de Allure
<img width="1495" height="927" alt="image" src="https://github.com/user-attachments/assets/0c7fecac-f71e-4a2c-974a-b1d8fe5a23c3" />
<img width="1496" height="929" alt="image" src="https://github.com/user-attachments/assets/d8e697b0-5720-4d05-95f2-f09d8ecfe09e" />

