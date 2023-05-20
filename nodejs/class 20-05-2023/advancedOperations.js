//SORTING

db.products.find(); //all the products

db.products.find().sort({ price: 1 }); //sort the products by price in ascending
db.products.find().sort({ price: -1 }); //sort the products by price in descending

db.products.find().limit(10).sort({ price: 1 }); //sort the top 10 products by price in ascending

//Sorting by multiple fields

db.products.find().sort({ price: 1, name: -1 });

//In SQL, this operation was done using subqueries

// Sorting with indexes

db.products.createIndex({ price: 1 });

//Aggregation


//General Syntax:
// db.products.aggregate([
//     { $sort: { price: 1 } },
//     // Additional aggregation stages
//   ])
  


db.products.aggregate([
  { $sort: { price: 1 } },
  { $match: { category: "Electronics" } },
  { $group: { _id: "$category", averagePrice: { $avg: "$price" } } },
]);
// {_id: 'Electronics', averagePrice: 5000}

// $min, $max, $sum