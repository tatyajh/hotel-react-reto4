# Hotels Travelling — Buscar Hotel

Una vista de búsqueda y reserva de hoteles: filtrar por país, fechas, precio y tamaño, ver las tarjetas de cada hotel y entrar al detalle. Construida con diseño atómico (átomos, moléculas, organismos, plantillas) para que cambiar una pieza pequeña no obligue a tocar el resto de la aplicación.

Sitio publicado: https://tatyajh.github.io/hotel-react-reto4/

## Características

- Filtro de hoteles por país, rango de fechas, precio y tamaño.
- Listado de hoteles obtenido de una API pública (mockapi.io).
- Detalle de cada hotel con opción de reservar.
- Página de reservas con opción de eliminar una reserva ya hecha.
- Diseño responsivo (mobile / tablet / desktop).

## Stack técnico

- Next.js (App Router) + React
- Redux Toolkit para el estado de reservas
- Material UI (MUI)
- CSS Modules

## Estructura de archivos

Organizada con diseño atómico:

```
components/
├── atoms/        # Piezas mínimas (botones)
├── molecules/    # Header, tarjeta de hotel, menú
├── organisms/    # Filtro de tarjetas, lista de reservas
└── template/     # Composición de organismos por página
```

## Getting Started

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) para ver el resultado.

## Build y despliegue

El proyecto se exporta como sitio estático y se publica en GitHub Pages:

```bash
npm run build
```

Esto genera la carpeta `out/`, que se publica en la rama `gh-pages`.
