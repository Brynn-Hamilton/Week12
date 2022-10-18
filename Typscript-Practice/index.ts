console.log("======= Tallest Mountain =======")
interface Mountain {
  name: string;
  height: number;
}

let mountains: Mountain[] = [
  { name: "Kilimanjaro", height: 19341 },
  { name: "Everest", height: 29029 },
  { name: "Denali", height: 20310 }
];

function findNameOfTallestMountain(array) {
  let tallestHeight = 0;
  let tallestName = "";

  for (let i = 0; i < array.length; i++) {
    if (array[i].height > tallestHeight) {
      tallestHeight = array[i].height;
      tallestName = array[i].name;
    }
  }
  return tallestName;
}

console.log(findNameOfTallestMountain(mountains));

console.log("======= Products =======")

interface Product {
  name: string;
  price: number;
}

let products: Product[] = [
  { name: "Milk", price: 3.70 },
  { name: "Eggs", price: 8.68 },
  { name: "Chicken", price: 11.37 }
];

function calcAveragePrice(products: Product[]): number {
  let sum: number = 0;
  let average: number = 0;
  for (let index: number = 0; index < products.length; index++) {
    sum += (products[index].price);
    average = (sum / products.length)
  }
  return average;
}
console.log(calcAveragePrice(products));

//working on this one
console.log("======= Inventory =======")

interface InventoryItem {
  product: Product;
  quantity: number;
}

let inventory: InventoryItem[] = [
  { product: {name: "Motor", price: 10 }, quantity: 10},
  { product: {name: "Sensor", price: 12.50 }, quantity: 4},
  { product: {name: "LED", price: 1 }, quantity: 20},
];


function calcInventoryValue(inv: InventoryItem[]): number {
  let total: number = 0;
  for(let i:number=0; i <inv.length; i++){
    let value = inv[i].product.price * inv[i].quantity;
    total += value;
  }
  return total;
}

console.log(calcInventoryValue(inventory));