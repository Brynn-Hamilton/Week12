console.log("======= Tallest Mountain =======")
interface Mountain {
  name: string,
  height: number
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
  name: string,
  price: number
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
  product: Product[],
  quantity: number
}

let inventory: InventoryItem[] = [
  { products.name: "motor", products.price: 10.00, quantity: 10 },
  { products.name: "motor", products.price: 10.00, quantity: 10 },
  { products.name: "motor", products.price: 10.00, quantity: 10 },
];

function calcInventoryValue(products: Product[]): number {
  let sum: number = 0;
  let average: number = 0;
  for (let index: number = 0; index < products.length; index++) {
    sum += (products[index].price);
    average = (sum / products.length)
  }
  return average;
}
console.log(calcAveragePrice(products));