/*
db.food.find({price:{$eq:18.32}});

db.food.find({type:{$in:["dairy" ,  "fruit" , "bakery"]}})

newProducts> db.food.find().count()

newProducts> db.food.find().limit(10)

newProducts> db.food.find().limit(5).count()

newProducts> db.food.find().skip(50).count()

newProducts> db.food.find().skip(50)


logical opertor

And opertor
newProducts> db.food.find({$and:[{type:"fruit"} , {height:{$gt:400}}]})


or opertor
newProducts> db.food.find({$or:[{type:"fruit"} , {height:{$gt:400}}]})

not opertor
newProducts> db.food.find({$nor:[{type:"fruit"} , {height:{$gt:400}}]})



































*/