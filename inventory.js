function Product (name,category="general",price,quantity=1){
  this.id=generateID();
  this.name=name;
  this.category=category;
  this.price=price;
  this.quantity=quantity;

  this.displayDetails = function (){
    return "ID: "+this.id + ", Name: " + this.name + ", Category: " 
    + this.category + ", Price: " + this.price + ", quantity: " + this.quantity;
  };
}
let uid = 1;
function generateID(){
  return uid++;
}
let inventory = []

function addProduct(name,category,price,quantity){
  if (!name || !price){
    throw new Error("insufficient information");
  }
  else if(price < 0 || quantity < 0){
    throw new Error("unacceptable price or quantity");
  }
  const product = new Product(name, category, price, quantity);
  inventory.push(product);
}

function removeProduct(id){
  let idx = inventory.findIndex(product => product.id===id);
  if (idx === -1){
    throw new Error(`product with id number ${id} does not exist in inventory`);
  } else {
    inventory.splice(idx,1)
  }
}

function updateQuantity(id,changeInStock){
  let product = inventory.find(product => product.id===id);
  if (!product){
    throw new Error("product not found");
  }
  if (product.quantity+changeInStock<0){
    throw new Error("insufficient stock");
  } else{
    product.quantity=product.quantity+changeInStock;
  }
}

function calculateInventoryValue(){
  return inventory.reduce((total,product)=>
    total + (product.price*product.quantity),0)
}

function searchProducts(name){
  return inventory.filter(product => 
    product.name.toLowerCase().includes(name.toLowerCase())
  )
}

function filterProducts(category){
  return inventory.filter(product =>
    product.category.toLowerCase().includes(category.toLowerCase())
  )
}

function factorial(n){
  if (n<=1) return 1;
  return n * factorial(n-1);
}

function factorialOfTotalProducts(){
  return factorial(inventory.length);
}

console.log(inventory);

// addProduct("Moto G31","Electronics",12500,7);
// addProduct("Asus Vivobook","Electronics",32000,3);
// addProduct("Writometer","Stationary",30,100);

// console.log(inventory);

// console.log(calculateInventoryValue());

// addProduct("Broom",undefined,120,8);

// console.log(inventory)

// motoID = searchProducts("moto")[0].id;

// console.log(motoID);

// removeProduct(motoID);

// console.log(inventory);

// console.log(calculateInventoryValue());

// generalID = filterProducts("general")[0].id;

// updateQuantity(generalID,10);

// console.log(inventory[generalID-2]);

// updateQuantity(generalID,-3);

// console.log(inventory[generalID-2]);

// calculateInventoryValue();