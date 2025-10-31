const { finaltestPage } = inject();

Given(/que el usuario está en la página de Mercado Libre de "([^"]*)"$/, async (pais) => {
    await finaltestPage.abrirPaginaInicio(pais);
});

When(/busca el término "([^"]*)"$/, async (termino) => {
    await finaltestPage.buscarTermino(termino);
});

When(/aplica el filtro de condición "([^"]*)"$/, async (condicion) => {
    await finaltestPage.aplicarFiltroCondicion(condicion);
});

When(/aplicar el filtro de ubicación "([^"]*)"$/, async (ubicacion) => {
    await finaltestPage.aplicarFiltroUbicacion(ubicacion);
});

When(/ordena los resultados por "([^"]*)"$/, async (criterio) => {
    await finaltestPage.ordenarResultados(criterio);
});

Then(/Obtener los primeros 5 productos y sus precios$/, async () => {
    await finaltestPage.verificarProductos();
});