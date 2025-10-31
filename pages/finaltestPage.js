/**
 * @file 
 * @author Marco Soto
 * @version 1.0
 */

const { I } = inject();
const timer = 5;

class finaltestPage {
    selectors = {
        countrySelector: (pais) => `//a[text()="${pais}"]`, //Selector en forma de función para obtener el país dinámicamente
        searchBar: '//input[@class="nav-search-input"]', //Selector de la barra de búsqueda
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
    }

    async buscarTermino(termino) {
        await I.waitForElement(this.selectors.searchBar, timer);
        await I.fillField(this.selectors.searchBar, termino);
        await I.pressKey('Enter');
        await I.waitForElement(this.selectors.searchResults, timer);
    }

    async aplicarFiltroCondicion(condicion) {
        await I.click(this.selectors.filtroCondicion(condicion));
        await I.waitForElement(this.selectors.searchResults, timer);
    }

    async aplicarFiltroUbicacion(ubicacion) {
        await I.click(this.selectors.filtroUbicacion(ubicacion));
        await I.waitForElement(this.selectors.searchResults, timer);
    }

    async ordenarResultados(criterio) {
        const isExpanded = await I.grabAttributeFrom(this.selectors.criterio, 'aria-expanded');
        await I.click(this.selectors.criterio);
        if (isExpanded === 'false' || !isExpanded) {
            I.scrollTo(this.selectors.criterio);
            await I.click(this.selectors.criterio);
        }
        
        await I.click(this.selectors.sortBy(criterio));
        await I.waitForElement(this.selectors.searchResults, timer);
    }

    async verificarProductos() {
        for (let i = 1; i <= 5; i++) {
            const nombreProducto = await I.grabTextFrom(this.selectors.productoItem(i));
            const precioProducto = await I.grabTextFrom(this.selectors.precioItem(i));
            console.log(`Producto ${i}: ${nombreProducto} - Precio: ${precioProducto}`);
        }
    }
}

module.exports = new finaltestPage();