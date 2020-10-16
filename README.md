# Create One To One Relationship MongoDB With NodeJS and Mongoose
![ER Diagram One to One Relationship MongoDB with Mongoose and NodeJS](https://res.cloudinary.com/dsv9w1ey3/image/upload/v1602577764/github-images/ER_Diagram_MongoDB_One-to-One_Relationships_m0ex2w.png)

# Data Base Input 
You can change value of key database on server.js

Example: 

    For Brand Table :
    {
        name: "Microsoft"
    }

    For Device Table :

    {
        name: "Surface Studio"
        storage: "1TB"
        color: "Piano Blue"
        code: 444GB // for this key code is automaticly generated
        brand: {name: "Microsoft"} // automaticly by referende on Brand table
    }

So you just change key `name` on **Brand** table, and change keys `name`, `storage`, `color` on **Device** table.
## Run Code
    $ cd
    $ npm run dev