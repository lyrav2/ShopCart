# ShopCart
ShopCart API for WEB422

Jimmy Liu

# How to set up the application

1. Clone source code from repository
2. Run npm install
3. Create a config folder and inside it, create a file called keys.env
4. Add environment variables
5. Run application with nodemon server.js

# Routes

GET

/products/

* Get all products

/products/?bestseller=true

* Get all bestselling products

/products/?category=${category}

* Get all products in ${category}

/products/${id}

* Get product with ${id}

/users/${id}

* Get user with ${id}

PUT

/products/${id}

* Update the product with ${id}

POST

/products/

* Create a product

/users/register

* Register a user

DELETE

/products/${id}

* Delete the product with ${id}

/users/${id}

* Delete the user with ${id}
