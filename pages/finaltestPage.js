/**
 * @file 
 * @author Marco Soto
 * @version 1.0
 */

const { I } = inject();
const fs = require('fs');
const allure = codeceptjs.container.plugins('allure');
const timer = 5;

class finaltestPage {
    selectors = {
        countrySelector: (pais) => `//a[text()="${pais}"]`, //Selector en forma de función para obtener el país dinámicamente
        searchBar: '//input[@placeholder="Buscar productos, marcas y más…"]', //Selector de la barra de búsqueda
        searchResults: '//section[@class="ui-search-top-keywords"]', //Selector de los resultados de búsqueda
        filtroCondicion: (condicion) => `//span[@class="ui-search-filter-name" and text()="${condicion}"]`, //Selector para filtro de condición
        filtroUbicacion: (ubicacion) => `//span[@class="ui-search-filter-name" and text()="${ubicacion}"]`, //Selector para filtro de ubicación
        sortBy: (criterio) => `//span[text()="${criterio}"]`,
        criterio: '//button[@aria-label="Más relevantes"]',
        productoItem: (itemNo) => `(//a[@class="poly-component__title"])[${itemNo}]`,
        precioItem: (itemNo) => `(//div[@class="poly-price__current"])[${itemNo}]`,
    } 

    async abrirPaginaInicio(pais) {
        await I.amOnPage('/');
        await I.click(this.selectors.countrySelector(pais));
        await I.saveScreenshot('01-mainPage.png', true);
        const img = fs.readFileSync('output/01-mainPage.png');
        allure.addAttachment('01-mainPage', img, 'image/png');
    }

    async buscarTermino(termino) {
        await I.waitForElement(this.selectors.searchBar, timer);
        await I.fillField(this.selectors.searchBar, termino);
        await I.pressKey('Enter');
        await I.waitForElement(this.selectors.searchResults, timer);
        await I.saveScreenshot('02-termino.png', true);
        const img = fs.readFileSync('output/02-termino.png');
        allure.addAttachment('02-termino', img, 'image/png');
    }

    async aplicarFiltroCondicion(condicion) {
        await I.click(this.selectors.filtroCondicion(condicion));
        //await I.waitForElement(this.selectors.searchResults, timer);
        await I.saveScreenshot('03-condicion.png', true);
        const img = fs.readFileSync('output/03-condicion.png');
        allure.addAttachment('03-condicion', img, 'image/png');
    }

    async aplicarFiltroUbicacion(ubicacion) {
        await I.click(this.selectors.filtroUbicacion(ubicacion));
        await I.waitForElement(this.selectors.searchResults, timer);
        await I.saveScreenshot('04-ubicacion.png', true);
        const img = fs.readFileSync('output/04-ubicacion.png');
        allure.addAttachment('04-ubicacion.png', img, 'image/png');
    }

    async ordenarResultados(criterio) {
        const isExpanded = await I.grabAttributeFrom(this.selectors.criterio, 'aria-expanded');
        I.scrollTo(this.selectors.criterio);
        await I.click(this.selectors.criterio);
        await I.click(this.selectors.sortBy(criterio));
        await I.waitForElement(this.selectors.searchResults, timer);
        await I.saveScreenshot('05-criterio.png', true);
        const img = fs.readFileSync('output/05-criterio.png');
        allure.addAttachment('05-criterio', img, 'image/png');
    }

    async verificarProductos() {
        for (let i = 1; i <= 5; i++) {
            const nombreProducto = await I.grabTextFrom(this.selectors.productoItem(i));
            const precioProducto = await I.grabTextFrom(this.selectors.precioItem(i));
            console.log(`Producto ${i}: ${nombreProducto} - Precio: ${precioProducto}`);
        }
        await I.saveScreenshot('06-verificarProd.png', true);
        const img = fs.readFileSync('output/06-verificarProd.png');
        allure.addAttachment('06-verificarProd', img, 'image/png');
    }
}

module.exports = new finaltestPage();