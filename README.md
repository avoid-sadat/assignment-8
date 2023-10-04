Site-Link:   

    https://assignment-8-lovat.vercel.app/api/v1/books

 User

    customer Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiY3VzdG9tZXIiLCJ1c2VySWQiOiI1NWNlMzMxMi0wYzFkLTQ0NjEtODA4ZC1mOGE4MzNjOWM5NGMiLCJpYXQiOjE1MTYyMzkwMjJ9.osIorFQxMW9RybjZu56w9MT3YjJqU-W9hjbBwXAfBHE

    admin token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJ1c2VySWQiOiI0NGI3ZjBhZi03M2UyLTQwNjgtYWQyNy02Y2VjYzI3ZTcyNDMiLCJpYXQiOjE1MTYyMzkwMjJ9.mWstgfbkKCTVaXUa_fpZVTuxiNdv-c99swJpo1LJp-Q

    api/v1/auth/signup (POST)
    api/v1/auth/signin (POST)
    api/v1/users (GET)
    api/v1/users/55ce3312-0c1d-4461-808d-f8a833c9c94c (Single GET) Include an id that is saved in your database
    api/v1/users/55ce3312-0c1d-4461-808d-f8a833c9c94c (PATCH)
    api/v1/users/55ce3312-0c1d-4461-808d-f8a833c9c94c (DELETE) Include an id that is saved in your database
    api/v1/profile (GET)

Category

    api/v1/categories/create-category (POST)
    api/v1/categories (GET)
    api/v1/categories/f64f2ec1-c670-475e-92ad-f3c73b42f755 (Single GET) Include an id that is saved in your database
    api/v1/categories/f64f2ec1-c670-475e-92ad-f3c73b42f755 (PATCH)
    api/v1/categories/f64f2ec1-c670-475e-92ad-f3c73b42f755 (DELETE) Include an id that is saved in your database

Books

    api/v1/books/create-book (POST)
    api/v1/books (GET)
    api/v1/books/:categoryId/category (GET)
    api/v1/books/:id (GET)
    api/v1/books/:id (PATCH)
    api/v1/books/:id (DELETE)

Orders

    api/v1/orders/create-order (POST)
    api/v1/orders (GET)
    api/v1/orders/:orderId (GET)
