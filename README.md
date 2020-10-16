# Create One To One Relationship MongoDB With NodeJS and Mongoose
![ER Diagram One to One Relationship MongoDB with Mongoose and NodeJS](https://res.cloudinary.com/dsv9w1ey3/image/upload/v1602577764/github-images/ER_Diagram_MongoDB_One-to-One_Relationships_m0ex2w.png)

# Data Base Input 
Change value of key database on server.js

Example: 

    For Brand Table :
    {
        name: "Microsoft"
    }

    For Device Table :

    {
        name: "Surface Book"
        storage: "256GB"
        color: "Grey"
        code: 512GB // key code is automatically generated
        brand: {name: "Microsoft"} // automatically by reference on Brand Table
    }

So you just change key `name` on **Brand** table, and change keys `name`, `storage`, `color` on **Device** table.
## Run Code
    $ cd
    $ npm run dev