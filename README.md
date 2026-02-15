# Sistema de Gestión de Inventario

Aplicación web desarrollada para la administración de productos mediante operaciones de búsqueda, actualización, eliminación y alta de nuevos registros.

## Tecnologías utilizadas

- **Frontend:** JavaScript con React  
- **Backend:** Python con Flask  
- **Base de datos:** SQL  

## Funcionalidades principales

El sistema cuenta con **tres páginas principales**:

### 1. Búsqueda de productos
Permite encontrar productos según distintos criterios:

- Marca  
- Modelo  
- Categoría  
- Color  
- Rango de precios  
- Código de producto  

### 2. Gestión de stock
Desde esta sección se puede:

- Modificar el stock de productos existentes  
- Eliminar productos del inventario  

### 3. Alta de productos
Permite agregar nuevos productos indicando sus características:

- Marca  
- Modelo  
- Categoría  
- Color  
- Precio  
- Código  
- Stock inicial  

## Backend y lógica de datos

El backend fue desarrollado con **Flask**, implementando:

- Conexión a la base de datos SQL  
- API con operaciones **CRUD**:
  - **Create:** alta de productos  
  - **Read:** consulta y búsqueda  
  - **Update:** modificación de stock  
  - **Delete:** eliminación de productos  

## Objetivo del proyecto

Este proyecto fue creado con fines de aprendizaje y práctica en el desarrollo de aplicaciones, integrando frontend, backend y base de datos en un sistema funcional de gestión de inventario.
