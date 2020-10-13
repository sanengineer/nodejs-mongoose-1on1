# Create One on One Relationship MongoDB With NodeJS and Mongoose

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
        color: "Piano Black"
        code: 444GB // for this key code is automaticly generated
        brand: {name: "Microsoft"} // automaticly by referende on Brand table
    }

So you just change key `name` on **Brand** table, and change keys `name`, `storage`, `color` on **Device** table.
## Run Code
    $ cd
    $ npm run dev