/*--Utilizando Mongo Shell, crear una base de datos llamada ecommerce que contenga dos colecciones: mensajes y productos.
use ecommerce
*/

/*--1) Agregar 10 documentos con valores distintos a las colecciones mensajes y productos.--*/

db.createCollection('messages')
db.createCollection('products')

const mensajes = [
  {
    text: "Hey, I'm having trouble with this MongoDB challenge. Can you help me out?",
    time: '17:10',
    user: 'Die.zaubernacht@gmail.com'
  },
  {
    text: "Sure, what's the problem?",
    time: '17:12',
    user: 'tester@example.com'
  },
  {
    text: "I can't figure out how to create a new collection in the database.",
    time: '17:13',
    user: 'Die.zaubernacht@gmail.com'
  },
  {
    text: 'To create a new collection in MongoDB, you need to use the createCollection() method. ',
    time: '17:13',
    user: 'tester@example.com'
  },
  {
    text: "Thanks, that makes sense. I'll give it a try.",
    time: '17:15',
    user: 'Die.zaubernacht@gmail.com'
  },
  {
    text: 'No problem, let me know if you need any more help.',
    time: '17:15',
    user: 'tester@example.com'
  },
  {
    text: "Actually, I'm still having some issues. I'm not sure how to insert documents into the collection I just created.",
    time: '17:15',
    user: 'Die.zaubernacht@gmail.com'
  },
  {
    text: 'To insert documents into a collection in MongoDB, you can use the insertOne() or insertMany() methods',
    time: '17:15',
    user: 'tester@example.com'
  },
  {
    text: "That's helpful, thanks. I think I can figure it out from here.",
    time: '17:16',
    user: 'Die.zaubernacht@gmail.com'
  },
  {
    text: 'No problem, happy to help. Let me know if you need anything else.',
    time: '16:15',
    user: 'tester@example.com'
  }
]

// Agregamos 10 mensajes
db.messages.insertMany(mensajes)

const productos = [
  {
    title: 'Regla',
    price: 23.34,
    thumbnail:
      'https://cdn4.iconfinder.com/data/icons/education-759/2050/Education_flat-16-1024.png'
  },
  {
    title: 'Calculadora',
    price: 134.45,
    thumbnail:
      'https://cdn1.iconfinder.com/data/icons/icons-for-a-site-1/64/advantage_calculator-1024.png'
  },
  {
    title: 'Globo terraqueo',
    price: 200.5,
    thumbnail:
      'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-1024.png'
  },
  {
    title: 'Microscopio',
    price: 2100.45,
    thumbnail:
      'https://cdn4.iconfinder.com/data/icons/education-759/2050/Education_flat-10-1024.png'
  },
  {
    title: 'Telescopio',
    price: 3200.55,
    thumbnail:
      'https://cdn4.iconfinder.com/data/icons/education-759/2050/Education_flat-24-1024.png'
  },
  {
    title: 'Tubos de ensayo',
    price: 900.5,
    thumbnail:
      'https://cdn4.iconfinder.com/data/icons/education-759/2050/Education_flat-05-1024.png'
  },
  {
    title: 'Dragón',
    price: '5000',
    thumbnail:
      'https://cdn4.iconfinder.com/data/icons/medieval-23/340/medieval_dragon_fantasy_monster_mythology_flying_creature-512.png'
  },
  {
    title: '1-UP Mushroom',
    price: '500',
    thumbnail:
      'https://cdn3.iconfinder.com/data/icons/supermario/PNG/Mushroom---1UP.png'
  },
  {
    title: 'Bullets',
    price: '200',
    thumbnail:
      'https://cdn4.iconfinder.com/data/icons/crime-and-security-24/64/35-512.png'
  }
]

// Agregamos 10 productos
db.products.insertMany(productos)

/*--2) Definir las claves de los documentos en relación a los campos de las tablas de esa base.--*/

db.products.update({ title: 'Globo terraqueo' }, { $set: { price: 120 } })
db.products.update({ title: 'Microscopio' }, { $set: { price: 2550 } })
db.products.update({ title: 'Regla' }, { $set: { price: 300 } })
db.products.update({ title: 'Calculadora' }, { $set: { price: 750 } })
db.products.update({ title: 'Dragón' }, { $set: { price: 3000 } })
db.products.update({ title: 'Telescopio' }, { $set: { price: 3500 } })
db.products.update({ title: 'Tubos de ensayo' }, { $set: { price: 2000 } })
db.products.update({ title: '1-UP Mushroom' }, { $set: { price: 1000 } })

/*--3) Listar todos los documentos en cada colección.--*/

db.products.find()
db.messages.find()

/*--4) Mostrar la cantidad de documentos almacenados en cada una de ellas.--*/

db.products.count()
db.messages.count()

/*--5)  Realizar un CRUD sobre la colección de productos:--*/

// a) agregar un producto más en la colección de productos:

const newProduct = {
  title: 'Notebook',
  price: 100,
  thumbnail:
    'https://cdn1.iconfinder.com/data/icons/office-icons-17/512/ilustracoes_04-10-1024.png'
}

db.products.insertOne(newProduct)
db.products.find()

db.products.update({ title: 'Notebook' }, { $set: { price: 200 } })

// b) Realizar una consulta por nombre de producto específico:

// i) listar los productos con precio <1000

db.products.find({ price: { $lt: 1000 } })

// ii) listar los productos con precio >1000 <3000
db.products.find({ price: { $gt: 1000, $lt: 3000 } })

// iii) listar los productos con precio > 3000
db.products.find({ price: { $gt: 3000 } })

// iv) obtener el tercer producto mas barato:
db.products.find().sort({ price: 1 }).skip(3).limit(1)

// c) hacer una actualización sobre todos los productos, agregando el campo stock a todos ellos con un valor de 100
db.products.updateMany({}, { $set: { stock: 100 } })

// d) cambiar el stock a cero de los productos con precios mayores a 4000 pesos.
db.products.updateMany({ price: { $gt: 4000 } }, { $set: { stock: 0 } })

// e) Borrar los productos con precio menos a 1000 pesos.
db.products.deleteMany({ price: { $lt: 1000 } })

/*--6) Crear un usuario que solo pueda leer la base de datos ecommerce.--*/

//use admin;
db.createUser({
  user: 'Tester2',
  pwd: 'hlw123',
  roles: [{ role: 'read', db: 'ecommerce' }]
})

// Verificar que el usuario no pueda cambiar la informacion
/*
    //user & pass
    mongo -u Tester2 -p asd456

    //Verificamos si podemos leer los posts
    use ecommerce

    //Obtenemos respuesta correctamente, mostrando los dos documentos 

    //Ahora intentaremos insertar un nuevo documento
    
    const newProduct = {title: "Pencils", price: 800, thumbnail: "url.com",};

    db.products.insertOne(newProduct);

    // Deberia decir Error.

*/
