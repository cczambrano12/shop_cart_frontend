# shop_cart_frontend
Shop cart - Angular Frontend

## Requisitos
- Instalación de node y npm.
- Instalación de Angular 9 o superior.
- Backend [shop_cart_backend](https://github.com/cczambrano12/shop_cart_backend)

## Instalación y ejecución
1. Descargue el proyecto:  
`git clone https://github.com/cczambrano12/shop_cart_frontend shop_cart_frontend`  

2. Ubíquese dentro de la carpeta del proyecto:  
`cd shop_cart_frontend`  

3. Instale las dependencias del proyecto (este paso toma tiempo):  
`npm install`  

4. Ejecute el servidor del backend [shop_cart_backend](https://github.com/cczambrano12/shop_cart_backend)

5. Ejecute el servidor de desarrollo. Por defecto Laravel ejecuta el servidor de desarrollo en *localhost:8000*.    
`ng serve`

6. Abra la aplicación web en *http://localhost:4200/*

## Funcionamiento
- Al entrar a la ruta principal de la aplicación o a la ruta `/shop` se carga la lista de productos dese el servidor y se crea un nuevo registro en la tabla **carts** con status *pending*.  
![productos](https://github.com/cczambrano12/shop_cart_frontend/img1.jpg?raw=true)  

- Desde esta vista se pueden agregar, modificar y eliminar elementos del carrito.
- Al ar click en el botón *Checkout* se cambia el estado del carrito actual a *completed*, se crea el registro correspondiente en la tabla **product_cars**, y se redirige el usuario a la routa `/checkout`.
