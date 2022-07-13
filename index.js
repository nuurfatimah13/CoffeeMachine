import {coffeeStock, isCoffeeMachineReady} from './state';
 
const makeCoffee = (type, miligrams) => {
    if (coffeeStock[type] >= miligrams) {
        console.log("Kopi berhasil dibuat!");
    } else {
        console.log("Biji kopi habis!");
    }
}

const displayStock = stock => {
    for (const type in stock) {
        console.log(type);
    }
}
 
makeCoffee("robusta", 80);
displayStock(coffeeStock);

// cetak isi coffeeStock & isCoffeeMachineReady
console.log(coffeeStock);
console.log(isCoffeeMachineReady);