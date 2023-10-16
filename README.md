# Prueba técnica, desarrollo Front – litElements

## Pre-requisitos

Bebe tener instalado lo siguiente:

- node 14.19.3
- cells

## Server

En un terminal

1.- Instalar:

```bash
    npm install -g json-server
```

2.- Ejecutar:

```bash
    json-server -w accionistas.json -p 3002
```

## Data Manager:

Ingresa a la carpeta `components/list-shareholders-dm`

1.- Instalar dependencias

```bash
    npm i
```

2.- Ejecutar el siguiente comando para icicilizar el componente:

```bash
    npm run dev
```

3.- En el archivo `list-shareholders-dm/demo/basic.html` debe estar la propiedad `host` definida con la url del servio creado con el json-server

4.- En el navegador se mostrara el componente para poder realizar pruebas.

## Componente Visual

Ingresa a la carpeta `components/list-shareholders-ui`

1.- Instalar dependencias

```bash
    npm i
```

2.- Ejecutar el siguiente comando para icicilizar el componente:

```bash
    npm run dev
```

3.- En el archivo `components/list-shareholders-ui/demo/basic.html` deben estar se debe pasar el valos a las siguientes propiedades: `dataManagerHost` que debe llevar la url del servicio creados con json-server y `business` que si es `true` solo muestras los accionistas con tipo de documento NIT y si es `false` muestra todos los accionistas

4.- En el navegador se mostrara el componente para poder realizar pruebas.
