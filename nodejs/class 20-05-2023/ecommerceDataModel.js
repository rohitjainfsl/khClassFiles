//Customers, Products, Orders, Payments

// PRODUCT.js
{
    sku: "101",
    productName: "Daawat Rice",
    price: 100,
    category: 'Eatables',
    stock: 100,
    attributes: ['1kg', '5kg', '10kg', '26kg'],
    description: 'Daawat is a competitor to India Gate Basmati Rice',
    bestBefore: '1234567890',
    nutritionalValues: {
        Sugar: 5%, milk: 10%
    },
    discount: 0,
    image: ['daawatRice.jpg', 'daawatRice1.jpg', 'daawatRice2.jpg']
}



//CUSTOMER.js
{
    _id: 'burhan@gmail.com', 
    fname: 'Burhanuddin',
    lname: 'Raja',
    phone: '1234567890',
    username: 'burhanTheCoder',
    hash: 'qwr244dfawq233rdf@#$%',
    address: [
            {
            area: 'Some Lane',
            city: 'Ahmedabad',
            state: 'Gujarat',
            country: 'India',
            pincode: '123456'
        }, 
        {
            area: 'Girlfriend\'s Lane',
            city: 'Ahmedabad',
            state: 'Gujarat',
            country: 'India',
            pincode: '654321'
        }    
    ],
}
//PAYMENTS.js
{
    customerID: 'burhan@gmail.com',
    paymentStatus: 'paid',
    mode: 'cc',
    gateway: 'razorpay',
    token: 'w234ww334rw3454er245ew4'
}


//ORDERS.js

{
    status: "pending",
    customerID: 'burhan@gmail.com',
    transactionID: '1e34fw5654dsfr3354sd5se442',
    currency: 'INR,
    products: [
        {
            pID: productId,
            quantity: 1,
            price: '100',
            tax: 5
        },
        {
            pID: productId,
            quantity: 2,
            price: '1000',
            tax: 50
        }
    ],
    paymentStatus: 'paid',
    shipping: {
        status: 'delivered',
        courierName: 'BlueDart',
        AWB: 1234123465,
        address: {
            area: 'Some Lane',
            city: 'Ahmedabad',
            state: 'Gujarat',
            country: 'India',
            pincode: '123456'
        }
    }
}



