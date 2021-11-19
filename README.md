<h1 align="center">API para un blog-Alkemy</h1>
<h3 align="center">utilizando Node, Express, base de datos MySQL</h3>

###
<h4>BASE DE DATOS:</h4>

<p>Crear Schema. Ejemplo: blog_alkemy</p>
<p>Correr las migraciones con: sequelize db:migrate</p>
<p>Correr los seeders con: sequelize db:seed:all</p>

###
## ENDPOINTS
# LISTAR
GET
localhost:3000/posts

# DETALLE
GET
localhost:3000/posts/1

# CREAR
POST
localhost:3000/posts
{
    title: vacaciones,
    content: Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,
    image: https://s1.1zoom.me/big3/471/Painting_Art_Back_view_Photographer_575380_3840x2400.jpg,
    category_id:2
}

# ACTUALIZAR
PATCH
localhost:3000/posts/2
{
    title: salidas,
    category_id:3
}

# BORRAR
DELETE
localhost:3000/posts/1


