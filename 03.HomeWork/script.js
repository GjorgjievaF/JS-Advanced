function Product(name,category,hasDiscount,price){
    this.name=name;
    this.category=category;
    this.hasDiscount=hasDiscount;
    this.price=price;
}

let products = [new Product("Dishwasher","white goods",true,80),new Product("Washing Machine","white goods",true,70),new Product("Freezer","white goods",false,60),new Product("Coffe maker","white goods",false,50),new Product("Jacket","clothes",true,35),new Product("Flip-flops","clothes",true,19),new Product("T-shirt","clothes",true,15),new Product("Jeans","clothes",false,21),new Product("Chocolate","food",true,8),new Product("Butter","food",false,4),new Product("Milk","food",false,3),new Product("Bread","food",true,2),new Product("Powder","make up",false,28),new Product("Lipstick","make up",true,18),new Product("Eyeshadow","make up",true,10)]


    

// Products with price greather tha 20
let findProductGreatherThan20 = products.filter(p => p.price > 20).forEach(p=> console.log(`${p.name}`))



//All products of category food that are on discount (Chocolate,Bread)
let productFoodDiscount= products.filter(p => p.category == "food" && p.hasDiscount ==true).map(p => `${p.name} ${p.category}`).forEach(p => console.log(p))




//All products that are on doscount
let allaProductOnDiscount = products.filter(p => p.hasDiscount == true).forEach(p => console.log(p.name))



//All products that are not on discount

let prodantNotOnDiscount = products.filter(p => p.hasDiscount == false).forEach(p => console.log(`${p.name}`))