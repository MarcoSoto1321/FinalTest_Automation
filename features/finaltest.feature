@priceProducts
Feature: Búsqueda y filtrado de productos en Mercado Libre
    @finaltest
    Scenario: Búsqueda de "playstation 5" nuevos en CDMX ordenados por mayor precio
        Given que el usuario está en la página de Mercado Libre de "México"
        When busca el término "playstation 5"
        And aplica el filtro de condición "Nuevo"
        And aplicar el filtro de ubicación "Local"
        And ordena los resultados por "Mayor precio"
        Then Obtener los primeros 5 productos y sus precios