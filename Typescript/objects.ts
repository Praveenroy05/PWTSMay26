// Object is a collection of key:value inside {}


const emp = 
{
  empId: 101,
  empName: 'Rahul',
  empAge: 30,
  empSalary: 100000
}

console.log(emp.empId);


console.log(emp["empName"]);

const dummy = 
{
    url: "https://google.com",
    email : "sddsf",
    password : "sdfs",
    invalidPassword: "Test"
}

console.log(dummy.url);

// import data from '../testdata/testdata.json'

// console.log(data)

// let data1 = 
// {
//   url: 'https://rahulshettyacademy.com/client',
//   email: 'testnHNk@gmail.com',
//   password: 'Testing@1234',
//   invalidPassword: 'Test',
//   errorMessage: 'Incorrect email or password.'
// }

// console.log(data1.url);

// let i =[10,20,30]

import data from '../testdata/product.json'

console.log(data);

let data1 = 
[
  {
    url: 'https://rahulshettyacademy.com/client',
    email: 'testnHNk@gmail.com',
    password: 'Testing@1234',
    productName: 'ADIDAS ORIGINAL',
    successMessage: 'Product Added To Cart'
  },
  {
    url: 'https://rahulshettyacademy.com/client',
    email: 'testnHNk@gmail.com',
    password: 'Testing@1234',
    productName: 'ZARA COAT 3',
    successMessage: 'Product Added To Cart'
  },
  {
    url: 'https://rahulshettyacademy.com/client',
    email: 'testnHNk@gmail.com',
    password: 'Testing@1234',
    productName: 'iphone 13 pro',
    successMessage: 'Product Added To Cart'
  }
]


// console.log(data1[0].url);

for (let product of data1){
    console.log(product.productName);
}







